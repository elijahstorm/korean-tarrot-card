const pollRandomPosition = () => Math.round(Math.random() * 50 + 20)

const getRandomLoremIpsumSpan = () => {
	const loremIpsumText =
		'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'

	const loremIpsumWords = loremIpsumText.split(' ')
	const numWords = loremIpsumWords.length

	const randomIndex = Math.floor(Math.random() * (numWords - 2)) // Generate a random index

	return loremIpsumWords.slice(randomIndex, randomIndex + 3).join(' ')
}

export const allScenes: Scene[] = new Array(6).fill({}).map((_, id) => ({
	id,
	objects: [
		{
			url: '/models/body2.glb',
			interactive: false,
		},
	],
	points: new Array(3).fill({}).map((_, index) => ({
		id: index + 1,
		description: getRandomLoremIpsumSpan(),
		left: pollRandomPosition(),
		top: pollRandomPosition(),
	})),
})) as Scene[]
