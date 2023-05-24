import { get } from 'svelte/store'
import {
	description,
	indicators,
	roadmapData,
	showNav,
	stateHistory,
	viewState,
} from './comp/stores/state'
import { setModalState } from './comp/stores/modalStore'

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
}

export const viewIntroState = () => {
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
	stateHistory.push(get(viewState))
	viewState.set('scene')
	showNav.set(true)
	description.set('Test description')
	indicators.set([
		{
			id: 1,
			left: 40,
			top: 50,
		},
		{
			id: 2,
			left: 50,
			top: 20,
		},
		{
			id: 3,
			left: 30,
			top: 60,
		},
	])
	roadmapData.set({
		title: '연에운',
		points: [
			{
				id: 1,
				name: '과거 - 운돌자',
			},
			{
				id: 2,
				name: '현재 - 정의',
			},
			{
				id: 3,
				name: '미래 - 절제',
			},
		],
		currentTab: 0,
		seen: [],
	})
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
