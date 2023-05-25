type Card = {
	id: number
	title: string
	info: string
	image: string
	item: {
		info: string
		name: string
		image: string
	}
}

type Prediction = {
	id: number
	title: string
}

type ActionPoint = {
	id: number
	name: string
	left: number
	top: number
	description: string
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
