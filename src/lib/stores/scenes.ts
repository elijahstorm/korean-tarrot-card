import { allScenes } from '$lib/sources/sceneData'
import { get, writable } from 'svelte/store'
import {
	selectedCardsState,
	type Indicator,
	type Roadmap,
	type SceneEventPoint,
	currentDisplayedScene,
	roadmapData,
	description,
	indicators,
	seenCardsState,
} from './state'
import { allCards } from '$lib/sources/cardData'

export const scenes = writable<Scene[]>([])

export const parseScene = (input: [Scene, Card]): { indicator: Indicator; roadmap: Roadmap } => {
	const [scene, card] = input

	const indicator = scene.points.map((point) => ({
		id: point.id,
		left: point.left,
		top: point.top,
	}))

	const roadmap = {
		title: card.title,
		points: scene.points.map(
			(point) =>
				({
					id: point.id,
					name: point.name,
					description: point.description,
				} as SceneEventPoint)
		) as [SceneEventPoint, SceneEventPoint, SceneEventPoint],
		currentTab: 0,
		seenItems: [],
	}

	return { indicator, roadmap }
}

const shuffleArray = <T>(array: T[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

export const drawRandomCards = () => {
	selectedCardsState.set(shuffleArray([...allCards]).slice(0, 3))
	currentDisplayedScene.set(get(selectedCardsState)[0].id)
}

export const resetSceneList = () => {
	scenes.set(shuffleArray([...allScenes]))
}

export const getCurrentSceneData = () =>
	[
		allScenes.find((scene) => scene.id === get(currentDisplayedScene)) ?? allScenes[0],
		allCards.find((scene) => scene.id === get(currentDisplayedScene)) ?? allCards[0],
	] as [Scene, Card]

export const activateSceneState = (id: number) => {
	roadmapData.update((data) =>
		!data ? null : { ...data, seenItems: [...data.seenItems, id], currentTab: id }
	)

	if ([...new Set(get(roadmapData)?.seenItems)].length >= 3) {
		seenCardsState.update((data) => [...data, get(currentDisplayedScene)])
	}

	description.set(get(roadmapData)?.points.find((point) => point.id === id)?.description ?? '')
}

export const changeScene = (id: number) => {
	roadmapData.update((data) => (!data ? null : { ...data, seenItems: [] }))

	currentDisplayedScene.set(id)

	const { indicator, roadmap } = parseScene(getCurrentSceneData())

	indicators.set(indicator)
	roadmapData.set(roadmap)
}
