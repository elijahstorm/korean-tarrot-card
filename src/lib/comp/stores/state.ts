import { writable } from 'svelte/store'

type StateViews = 'intro' | 'end' | 'scene' | 'cards' | 'results' | 'customize'
type SceneEventPoint = {
	id: number
	name: string
}

export const stateHistory: StateViews[] = []

export const viewState = writable<StateViews>('intro')

export const showNav = writable(false)

export const description = writable('')

export const indicators = writable<
	{
		id: number
		left: number
		top: number
	}[]
>([])

export const roadmapData = writable<{
	title: string
	points: [SceneEventPoint, SceneEventPoint, SceneEventPoint]
	currentTab: number
	seen: number[]
} | null>(null)
