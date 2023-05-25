type ActionPoint = {
	id: number
	name: string
	left: number
	top: number
	description: string
}

export type Scene = {
	id: number
	title: string
	points: [ActionPoint, ActionPoint, ActionPoint]
}

export const allScenes: Scene[] = [
	{
		id: 0,
		title: '연에운',
		points: [
			{
				id: 1,
				name: '과거 - 운돌자',
				description: 'Test description',
				left: 40,
				top: 50,
			},
			{
				id: 2,
				name: '현재 - 정의',
				description: 'Test 3',
				left: 50,
				top: 20,
			},
			{
				id: 3,
				name: '미래 - 절제',
				description: 'safs description',
				left: 30,
				top: 60,
			},
		],
	},
	{
		id: 1,
		title: '연에운',
		points: [
			{
				id: 1,
				name: 'fasfsaf',
				description: 'Test description',
				left: 40,
				top: 50,
			},
			{
				id: 2,
				name: 'safasfas',
				description: 'Test 3',
				left: 50,
				top: 20,
			},
			{
				id: 3,
				name: '미래 - 절제',
				description: 'safs description',
				left: 30,
				top: 60,
			},
		],
	},
]
