import { allCards } from './cardData'
import { allItems } from './itemData'

const pollRandomPosition = () => Math.round(Math.random() * 50 + 20)

const getRandomLoremIpsumSpan = () => {
	const loremIpsumText =
		'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'

	const loremIpsumWords = loremIpsumText.split(' ')
	const numWords = loremIpsumWords.length

	const randomIndex = Math.floor(Math.random() * (numWords - 2)) // Generate a random index

	return loremIpsumWords.slice(randomIndex, randomIndex + 3).join(' ')
}

export const allScenes: Scene[] = [
	{
		id: 0,
		objects: [],
		points: [
			{
				id: 1,
				description: '나무는 창조성과 생산의 의미를 지닙니다. 당신이 무언가를 시작하기 위해 투자한다면, 너무 긍정적인 부분만 보고 결정한 것은 아닌지 돌아보십시오.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 2,
				description: '강물에 물을 붓는 것은 정신적인 곳에 투자하는 것을 의미합니다. 정신적인 것에 한눈 팔다가 물을 모두 부어버리면 다시 담아낼 수 없듯, 지출에 각별의 주의해야합니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 3,
				description: '하늘의 별은 북극성과 북드칠성을 의미합니다. 희망차 보이는 아름다운 별이지만, 너무 긍정적으로만 생각하다 계획 없던 지출을 할 수도 있다는 의미를 가지고있습니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
		],
	},
	{
		id: 1,
		objects: [],
		points: [
			{
				id: 1,
				description: '초에 불을 ㄹ키는 것은 새롭게 시작하는 길을 밝게 밝히는 것을 의미합니다. 새로 시작하는 사업이 있다면 가능성을 믿으셔도 좋습니다. 초의 불빛이 당신의 길을 따스하게 밝혀줄 것입니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 2,
				description: '방울을 흔드는 것은 좋은 결과를 가져올 기운을 의미합니다. 앞으로 있을 결과를 기대하며 현재에 집중하세요. 원하는 결과가 기다리고 있을 것입니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 3,
				description: '붉은 꽃이 만개하는 것은 긍정적인 에너지와 당신의 앞길에 대한 축복을 상징합니다. 바라는 것을 손에 넣기까지 밝은 기운이 당신과 함께 할 것입니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
		],
	},
	{
		id: 2,
		objects: [],
		points: [
			{
				id: 1,
				description: '바람을 일으키는 황제의 모습에서 여유로움을 엿볼 수 있습니다. 당신에게 금전적으로 뒷받침이 따라와 여유로운 삶을 얻을 수 있게 됩니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 2,
				description: '둥근 여의주는 영원함과 완전함을 의미합니다. 당신의 노력에 대한 긍정적인 결과가 기대됩니다. 그 동안의 노력에 대한 결과를 착실하게 수확할 가능성이 높습니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 3,
				description: '용장식은 부유와 사치의 의미가 있습니다. 곧 당신에게 거액의 자산이 들어올 기회가 있습니다. 이 점을 염두하여 기회를 놓치지 말고 꼭 쟁취하십시오.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
		],
	},
	{
		id: 3,
		objects: [],
		points: [
			{
				id: 1,
				description: '검정과 흰 색의 대조되는 기둥을 섞는 것은 대립적이어도 균형을 유지하겠다는 의지를 보여줍니다. 균형을 이루겠다는 생각에 휩싸여 쉽게 결정을 하지 못하고 우유부단한 태도를 보일 수 있습니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 2,
				description: '저울의 균형은 공정한 판단을 하려는 의지를 뜻합니다. 혹은 주변인들이 당신을 판단하려는 저울질 일 수도 있습니다. 어느 상황에서든 당신을 위한 신중한 선택을 하도록 하세요.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 3,
				description: '칼 또한 치우치지 않고 균형있는 판단을 의미합니다. 주변에서 당신을 바라보는 시선이 고지식하다고 깐깐하다는 편견에 사로잡힐 수 있으니 이 점을 유의하시길 바랍니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
		],
	},
	{
		id: 4,
		objects: [],
		points: [
			{
				id: 1,
				description: '지팡이는 당신이 가고자 하는 길을 도와줍니다. 휘몰아치는 눈이 당신을 고립시킬 수 있으나, 이런 환경 속 당신은 내적인 깨달음에 도달할 수 있습니다.',
				left: 55,
				top: 50,
			},
			{
				id: 2,
				description: '늦은 밤 홀로 남겨진 당신은 어쩌면 고독의 시간을 가지게 될 수 있습니다. 주변인들과 동떨어질 가능성이 크고 새로운 사람과 접점이 어려울 수 있습니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 3,
				description: '어둠을 밝히는 불빛은 당신이 원하는 곳으로 가도록 돕는 인도자 역할을 합니다. 비록 홀로 남겨지게 되는 상황에서도 당신은 내적으로 원하는 경지에 도달 할 수 있습니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
		],
	},
	{
		id: 5,
		objects: [],
		points: [
			{
				id: 1,
				description: '물을 컵에 따르는 것은 의식과 무의식의 통합, 둘 사이의 중재를 의미합니다. 당신의 주변 관계가 정리되거나 갈등이 있던 상대와 타협할 수 있게 됩니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 2,
				description: '노란 붓꽃은 이상적이고 긍정적인 의미를 지닙니다. 주변을 둘러보면 당신이 바라던 이상적인 인연이 기다리고 있을 수 있습니다. 혹은 좋은 사람들과 원만한 관계를 맺게 됩니다.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
			{
				id: 3,
				description: '사각형과 삼각형이 어울리는 것은 중용을 의미합니다. 주변인들과 균형적인 관계를 이루고 서로 이해하는 사이가 될 수 있습니다. 얽혀있는 관계를 풀어보도록 노력해보세요.',
				left: pollRandomPosition(),
				top: pollRandomPosition(),
			},
		],
	},
]
