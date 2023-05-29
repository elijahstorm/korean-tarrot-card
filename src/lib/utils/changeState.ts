import { get } from 'svelte/store'
import {
	description,
	indicators,
	roadmapData,
	seenCardsState,
	showNav,
	stateHistory,
	viewState,
} from '../stores/state'
import { setModalState } from '../stores/popup-modal'
import { drawRandomCards, getCurrentSceneData, parseScene, resetSceneList } from '../stores/scenes'

export const navBackState = () => {
	const back = stateHistory.pop() ?? 'intro'
	switch (back) {
		case 'intro':
			viewIntroState()
			break
		case 'selection':
			viewSelectionState()
			break
		case 'cards':
			viewCardsState()
			break
		case 'scene':
			viewSceneState()
			break
		case 'results':
			viewResultsState()
			break
		case 'customize':
			viewCustomizeState()
			break
		case 'end':
			viewEndState()
			break
	}
	stateHistory.pop()
}

const addToHistory = (callback: VoidFunction) => () => {
	if (stateHistory[stateHistory.length - 1] !== get(viewState)) {
		stateHistory.push(get(viewState))
	}

	callback()
}

export const viewIntroState = addToHistory(() => {
	resetSceneList()
	viewState.set('intro')
	showNav.set(false)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
})

export const viewSelectionState = addToHistory(() => {
	viewState.set('selection')
	showNav.set(true)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
})

export const viewCardsState = addToHistory(() => {
	drawRandomCards()
	viewState.set('cards')
	showNav.set(true)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
	seenCardsState.set([])
})

export const viewSceneState = addToHistory(() => {
	const { indicator, roadmap } = parseScene(getCurrentSceneData())
	viewState.set('scene')
	showNav.set(true)
	description.set('')
	indicators.set(indicator)
	roadmapData.set(roadmap)
})

export const viewResultsState = addToHistory(() => {
	viewState.set('results')
	showNav.set(true)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
})

export const viewCustomizeState = addToHistory(() => {
	viewState.set('customize')
	showNav.set(true)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
})

export const viewEndState = addToHistory(() => {
	viewState.set('end')
	showNav.set(true)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
})

export const viewPopupModal = () => {
	setModalState(true)
}
