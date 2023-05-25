import { writable } from 'svelte/store'

type StateViews = 'intro' | 'selection' | 'cards' | 'scene' | 'results' | 'customize' | 'end'

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
	seenItems: number[]
}

export const stateHistory: StateViews[] = []

export const predictionState = writable<number>(0)

export const selectedCardsState = writable<Card[]>([])

export const seenCardsState = writable<number[]>([])

export const currentDisplayedScene = writable<number>(0)

export const viewState = writable<StateViews>('intro')

export const showNav = writable(false)

export const description = writable('')

export const indicators = writable<Indicator>([])

export const roadmapData = writable<Roadmap | null>(null)
