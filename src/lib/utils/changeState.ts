import { get } from 'svelte/store'
import {
	description,
	indicators,
	roadmapData,
	showNav,
	stateHistory,
	viewState,
} from '../stores/state'
import { setModalState } from '../stores/modalStore'
import { getNextScene, resetSceneList } from '../stores/scenes'

export const navBackState = () => {
	const back = stateHistory.pop() ?? 'intro'
	switch (back) {
		case 'intro':
			viewIntroState()
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

export const viewIntroState = () => {
	resetSceneList()
	stateHistory.push(get(viewState))
	viewState.set('intro')
	showNav.set(false)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
}

export const viewCardsState = () => {
	stateHistory.push(get(viewState))
	viewState.set('cards')
	showNav.set(true)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
}

export const viewSceneState = () => {
	const { indicator, roadmap } = getNextScene()
	stateHistory.push(get(viewState))
	viewState.set('scene')
	showNav.set(true)
	description.set('')
	indicators.set(indicator)
	roadmapData.set(roadmap)
}

export const viewResultsState = () => {
	stateHistory.push(get(viewState))
	viewState.set('results')
	showNav.set(true)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
}

export const viewCustomizeState = () => {
	stateHistory.push(get(viewState))
	viewState.set('customize')
	showNav.set(true)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
}

export const viewEndState = () => {
	stateHistory.push(get(viewState))
	viewState.set('end')
	showNav.set(true)
	description.set('')
	indicators.set([])
	roadmapData.set(null)
}

export const viewPopupModal = () => {
	setModalState(true)
}
