import { allCards } from '$lib/sources/cardData'
import { allItems } from '$lib/sources/itemData'
import { writable } from 'svelte/store'

export const selectedAttribute = writable('')

export const selectedBorder = writable(0)

export const selectedBorderColor = writable('')

export const selectedPerson = writable<Card>(allCards[0])

export const selectedObject = writable<Item>(allItems[0])
