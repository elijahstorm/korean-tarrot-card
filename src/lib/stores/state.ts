import { get, writable } from 'svelte/store'

type StateViews = 'intro' | 'end' | 'scene' | 'cards' | 'results' | 'customize'
export type SceneEventPoint = {
	id: number
	name: string
	description: string
}

export type Indicator = {
	id: number
	left: number
	top: number
}[]
export type Roadmap = {
	title: string
	points: [SceneEventPoint, SceneEventPoint, SceneEventPoint]
	currentTab: number
	seen: number[]
}

export const stateHistory: StateViews[] = []

export const viewState = writable<StateViews>('intro')

export const showNav = writable(false)

export const description = writable('')

export const indicators = writable<Indicator>([])

export const roadmapData = writable<Roadmap | null>(null)

export const activateSceneState = (id: number) => {
	roadmapData.update((data) =>
		!data ? null : { ...data, seen: [...data.seen, id], currentTab: id }
	)

	description.set(get(roadmapData)?.points.find((point) => point.id === id)?.description ?? '')
}
