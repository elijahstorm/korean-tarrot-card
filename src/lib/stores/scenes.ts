import { allScenes, type Scene } from '$lib/sources/sceneData'
import { get, writable } from 'svelte/store'
import type { Indicator, Roadmap, SceneEventPoint } from './state'

export const scenes = writable<Scene[]>([])

const parseScene = (scene: Scene): { indicator: Indicator; roadmap: Roadmap } => {
	const indicator = scene.points.map((point) => ({
		id: point.id,
		left: point.left,
		top: point.top,
	}))

	const roadmap = {
		title: scene.title,
		points: scene.points.map(
			(point) =>
				({
					id: point.id,
					name: point.name,
					description: point.description,
				} as SceneEventPoint)
		) as [SceneEventPoint, SceneEventPoint, SceneEventPoint],
		currentTab: 0,
		seen: [],
	}

	return { indicator, roadmap }
}

export const getNextScene = () => parseScene(get(scenes).pop() ?? allScenes[0])

export const resetSceneList = () => {
	const shuffleArray = (array: Scene[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
		return array
	}

	scenes.set(shuffleArray([...allScenes]))
}
