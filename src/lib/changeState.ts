import { description, indicators, roadmapData, showNav, viewState } from "./state"

export const viewIntroState = () => {
    viewState.set('intro')
    showNav.set(false)
    description.set('')
    indicators.set([])
    roadmapData.set(null)
}

export const viewCardsState = () => {
    viewState.set('cards')
    showNav.set(true)
    description.set('')
    indicators.set([])
    roadmapData.set(null)
}

export const viewSceneState = () => {
    viewState.set('scene')
    showNav.set(true)
    description.set('Test description')
    indicators.set([
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
    roadmapData.set({
        title: '연에운',
        points: [
            '과거 - 운돌자',
            '현재 - 정의',
            '미래 - 절제',
        ],
    })
}

export const viewResultsState = () => {
    viewState.set('results')
    showNav.set(true)
    description.set('')
    indicators.set([])
    roadmapData.set(null)
}

export const viewCustomizeState = () => {
    viewState.set('customize')
    showNav.set(true)
    description.set('')
    indicators.set([])
    roadmapData.set(null)
}

export const viewEndState = () => {
    viewState.set('end')
    showNav.set(true)
    description.set('')
    indicators.set([])
    roadmapData.set(null)
}
