import { writable } from "svelte/store"

type StateViews = 'intro' | 'end' | 'scene' | 'cards' | 'results' | 'customize'

export const viewState = writable<StateViews>('intro')

export const showNav = writable(true)

export const description = writable('Test description')

export const indicators = writable<{
    left: number
    top: number
}[]>([
    {
        left: 40,
        top: 50,
    },
    {
        left: 50,
        top: 20,
    },
    {
        left: 30,
        top: 60,
    },
])

export const roadmapData = writable<{
    title: string
    points: [string, string, string]
}>({
    title: '연에운',
    points: [
        '과거 - 운돌자',
        '현재 - 정의',
        '미래 - 절제',
    ],
})