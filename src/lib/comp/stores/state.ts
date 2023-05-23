import { writable } from "svelte/store"

type StateViews = 'intro' | 'end' | 'scene' | 'cards' | 'results' | 'customize'

export const stateHistory : StateViews[] = []

export const viewState = writable<StateViews>('intro')

export const showNav = writable(false)

export const description = writable('')

export const indicators = writable<{
    left: number
    top: number
}[]>([])

export const roadmapData = writable<{
    title: string
    points: [string, string, string]
} | null>(null)