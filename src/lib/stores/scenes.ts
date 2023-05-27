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
	predictionState,
} from './state'
import { allCards } from '$lib/sources/cardData'
import { allPredictions } from '$lib/sources/predictionData'

export const scenes = writable<Scene[]>([])

export const parseScene = (scene: Scene): { indicator: Indicator; roadmap: Roadmap } => {
	const indicator = scene.points.map((point) => ({
		id: point.id,
		left: point.left,
		top: point.top,
	}))

	const roadmap = {
		title: getCurrentPredictionData().title,
		points: scene.points.map(
			(point) =>
				({
					id: point.id,
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

const getFromData = <T extends { id: number }>(dataSource: T[]) =>
	dataSource.find((data) => data.id === get(predictionState)) ?? dataSource[0]

export const getCurrentPredictionData = () => getFromData(allPredictions)

export const getCurrentSceneData = () => getFromData(allScenes)

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
