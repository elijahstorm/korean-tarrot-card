type Card = {
	id: number
	title: string
	info: string
	description: string
	fileName: string
	items: [number, number, number]
}

type Item = {
	id: number
	name: string
	info: string
	fileName: string
}

type Prediction = {
	id: number
	title: string
}

type ActionPoint = {
	id: number
	left: number
	top: number
	description: [string, string, string, string]
}

type RenderObject = {
	url: string
	interactive: boolean
}

type Scene = {
	id: number
	objects: RenderObject[]
	points: [ActionPoint, ActionPoint, ActionPoint]
}
