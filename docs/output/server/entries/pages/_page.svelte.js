import { c as create_ssr_component, b as add_attribute, a as subscribe, d as each, v as validate_component, e as escape, m as missing_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const predictionState = writable(0);
const selectedCardsState = writable([]);
const seenCardsState = writable([]);
const currentDisplayedScene = writable(0);
const viewState = writable("intro");
const showCardDisplay = writable(true);
const showNav = writable(false);
const description = writable("");
const indicators = writable([]);
const roadmapData = writable(null);
const allCards = [
  {
    id: 0,
    title: "별",
    info: "info",
    description: "desc",
    fileName: "star",
    items: [0, 1, 2]
  },
  {
    id: 1,
    title: "마법사",
    info: "info",
    description: "desc",
    fileName: "magician",
    items: [3, 4, 5]
  },
  {
    id: 2,
    title: "황제",
    info: "info",
    description: "desc",
    fileName: "emperor",
    items: [6, 7, 8]
  },
  {
    id: 3,
    title: "정의",
    info: "info",
    description: "desc",
    fileName: "justice",
    items: [9, 10, 11]
  },
  {
    id: 4,
    title: "은둔자",
    info: "info",
    description: "desc",
    fileName: "hermit",
    items: [12, 13, 14]
  },
  {
    id: 5,
    title: "절제",
    info: "info",
    description: "desc",
    fileName: "temperance",
    items: [15, 16, 17]
  }
];
const allItems = [
  {
    id: 0,
    name: "여의주",
    info: "여의주",
    fileName: "yaiju"
  },
  {
    id: 1,
    name: "물병",
    info: "물병",
    fileName: "mulbyong"
  },
  {
    id: 2,
    name: "돌",
    info: "돌",
    fileName: "dol"
  },
  {
    id: 3,
    name: "칼",
    info: "칼",
    fileName: "kal"
  },
  {
    id: 4,
    name: "부채",
    info: "부채",
    fileName: "bujae"
  },
  {
    id: 5,
    name: "기둥",
    info: "기둥",
    fileName: "gidong"
  },
  {
    id: 6,
    name: "왕좌",
    info: "왕좌",
    fileName: "wongjuwa"
  },
  {
    id: 7,
    name: "저울",
    info: "저울",
    fileName: "juool"
  },
  {
    id: 8,
    name: "등불",
    info: "등불",
    fileName: "doongbul"
  },
  {
    id: 9,
    name: "물병",
    info: "물병",
    fileName: "mulbyong2"
  },
  {
    id: 10,
    name: "방울",
    info: "방울",
    fileName: "bangoul"
  },
  {
    id: 11,
    name: "촛불",
    info: "촛불",
    fileName: "chutbul"
  },
  {
    id: 12,
    name: "수선화",
    info: "수선화",
    fileName: "susunhaw"
  },
  {
    id: 13,
    name: "지팡이",
    info: "지팡이",
    fileName: "jipangi"
  },
  {
    id: 14,
    name: "버드나무",
    info: "버드나무",
    fileName: "budonamu"
  },
  {
    id: 15,
    name: "보름달",
    info: "보름달",
    fileName: "boloomdal"
  },
  {
    id: 16,
    name: "동백꽃",
    info: "동백꽃",
    fileName: "dongbakkkot"
  },
  {
    id: 17,
    name: "북두칠성",
    info: "북두칠성",
    fileName: "bookduchilsung"
  }
];
const pollRandomPosition = () => Math.round(Math.random() * 50 + 20);
const getRandomLoremIpsumSpan = () => {
  const loremIpsumText = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";
  const loremIpsumWords = loremIpsumText.split(" ");
  const numWords = loremIpsumWords.length;
  const randomIndex = Math.floor(Math.random() * (numWords - 2));
  return loremIpsumWords.slice(randomIndex, randomIndex + 3).join(" ");
};
new Array(6).fill({}).map((_, id) => ({
  id,
  objects: [
    {
      url: "/models/body2.glb",
      interactive: false
    }
  ],
  points: new Array(3).fill({}).map((_2, index) => ({
    id: index + 1,
    description: getRandomLoremIpsumSpan(),
    left: pollRandomPosition(),
    top: pollRandomPosition()
  }))
}));
const allPredictions = [
  {
    id: 0,
    title: "재물운"
  },
  {
    id: 1,
    title: "연애운"
  },
  {
    id: 2,
    title: "취업운"
  },
  {
    id: 3,
    title: "금년운"
  }
];
writable([]);
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let { left = 50 } = $$props;
  let { top = 50 } = $$props;
  let { id } = $$props;
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  style = `left: ${left}%; top: ${top}%;`;
  return `<button class="pointer-events-auto absolute w-min aspect-1 rounded-full overflow-clip p-6 opacity-40 bg-black text-white cursor-pointer hover:opacity-80 transition-opacity select-none"${add_attribute("style", style, 0)} type="button">click
</button>`;
});
const Click_indicators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $indicators, $$unsubscribe_indicators;
  let $roadmapData, $$unsubscribe_roadmapData;
  $$unsubscribe_indicators = subscribe(indicators, (value) => $indicators = value);
  $$unsubscribe_roadmapData = subscribe(roadmapData, (value) => $roadmapData = value);
  $$unsubscribe_indicators();
  $$unsubscribe_roadmapData();
  return `${each($indicators, (indicator) => {
    return `${!$roadmapData?.seenItems.includes(indicator.id) ? `${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        id: indicator.id,
        left: indicator.left,
        top: indicator.top
      },
      {},
      {}
    )}` : ``}`;
  })}`;
});
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $description, $$unsubscribe_description;
  $$unsubscribe_description = subscribe(description, (value) => $description = value);
  $$unsubscribe_description();
  return `${$description ? `<p class="select-none text-white">${escape($description)}</p>` : ``}`;
});
writable(false);
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showNav, $$unsubscribe_showNav;
  $$unsubscribe_showNav = subscribe(showNav, (value) => $showNav = value);
  $$unsubscribe_showNav();
  return `${$showNav ? `<nav class="flex gap-6 text-white"><button type="button"><img src="nav/back-button.svg" alt="Back button"></button>
		<button type="button"><img src="nav/home-button.svg" alt="Home button"></button>
		<button type="button"><img src="nav/info-button.svg" alt="Info button"></button></nav>` : ``}`;
});
const Lang = {
  title: "동양의 타로타드",
  subtitle: "원하는 운세를 확인하고 카드 속 공간을 탐험해보세요.",
  subtitle2: "행운카드를 만들어 더 좋은 운을 얻거나 나에게 부족한 운을 보완해보세요.",
  startButton: "시작하기",
  endTitle: "END",
  timelineNames: ["과거", "현재", "미래"],
  scene: {
    nextScreenButton: "다음 카드 해석 보기",
    gotoResults: "총 운 해석 보기"
  },
  results: {
    predictionHeader: "총 해석",
    header: '"과거에 사로잡히지 말고 인연을 마주하세요."',
    content: '현재 "절제" 카드는 주변과 타협하고 안정감을 가지려 하는 긍정적인 의미가 있습니다. 어쩌면 당신의 주별에 이상적인 인연이 기다리고 있을 수도 있습니다. 과거 "은둔자" 카드에서 부정적으로 해석 됐던 주변 인간관계를 다시 원만히 풀어갈 기회가 지금 당신의 행동에 달려있습니다. 미래 "정의" 카드는 멀지 않은 미래에 인간 관계 정리에서 고민하는 상황을 예견합니다. 어떤 상황이 다가오던지 옳은 선택을 하도록 대비할 필요성이 있습니다.',
    nextButton: "다른 운세 보러가기",
    makeCardButton: "행운카드 만들기",
    warningInfo: "당신의 총운을 기반으로 행운카드에서 운세를 보완해줄 수 있는 개체를 추천합니다.",
    cardInfoHeader: "헹운카드 추천 개체",
    cardInfoHL: "안 좋은 인연을",
    cardInfoNormal: "해결할 수 있는 개체"
  }
};
const Roadmap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $roadmapData, $$unsubscribe_roadmapData;
  let $selectedCardsState, $$unsubscribe_selectedCardsState;
  let $currentDisplayedScene, $$unsubscribe_currentDisplayedScene;
  $$unsubscribe_roadmapData = subscribe(roadmapData, (value) => $roadmapData = value);
  $$unsubscribe_selectedCardsState = subscribe(selectedCardsState, (value) => $selectedCardsState = value);
  $$unsubscribe_currentDisplayedScene = subscribe(currentDisplayedScene, (value) => $currentDisplayedScene = value);
  $$unsubscribe_roadmapData();
  $$unsubscribe_selectedCardsState();
  $$unsubscribe_currentDisplayedScene();
  return `${$roadmapData !== null ? `<section class="grid grid-cols-1 grid-rows-1 text-white select-none"><div class="col-start-1 row-start-1 bg-black blur-xl opacity-60 pointer-events-none"></div>

		<div class="flex row-start-1 col-start-1 gap-2"><h4 class="pt-0.5 font-maruburi">${escape($roadmapData.title)}</h4>

			<div class="relative w-2 pt-3 h-[calc(100%-1.5rem)] z-10"><div class="absolute h-full flex flex-col justify-between"><div class="bg-white rotate-45 w-2 aspect-1"></div>
					<div class="bg-white rotate-45 w-2 aspect-1"></div>
					<div class="bg-white rotate-45 w-2 aspect-1"></div></div>

				<div class="absolute w-[0.1rem] ml-[0.21rem] h-full bg-white opacity-60"></div></div>

			<div class="flex flex-col gap-4 text-sm py-0.5 -ml-3 opacity-70">${each($selectedCardsState, (card, index) => {
    return `<div class="grid group"><div class="${[
      "col-start-1 row-start-1 bg-gradient-to-r from-stone-900 via-stone-500 to-stone-900 opacity-0 transition-opacity",
      card.id === $currentDisplayedScene ? "opacity-90" : ""
    ].join(" ").trim()}"></div>

						<div class="col-start-1 row-start-1 bg-gradient-to-r from-stone-900 via-stone-500 to-stone-500 transition-opacity opacity-0 group-hover:opacity-90"></div>

						<button class="col-start-1 row-start-1 text-left py-1 px-2 pl-3 z-10" type="button">${escape(Lang.timelineNames[index])} - ${escape(card.title)}</button>
					</div>`;
  })}</div></div></section>` : ``}`;
});
const Bg_video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { cover = false } = $$props;
  let time = 0;
  let paused = false;
  let video;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.cover === void 0 && $$bindings.cover && cover !== void 0)
    $$bindings.cover(cover);
  return `<div class="absolute inset-0 w-full h-full overflow-hidden"><video autoplay muted${add_attribute("src", src, 0)} class="${[
    "absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2",
    cover ? "object-cover" : ""
  ].join(" ").trim()}"${add_attribute("currentTime", time, 0)}${add_attribute("paused", paused, 0)}${add_attribute("this", video, 0)}></video></div>`;
});
const Intro_scene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Bg_video, "BgVideo").$$render(
    $$result,
    {
      cover: true,
      src: "backgrounds/intro.mp4"
    },
    {},
    {}
  )}`;
});
const End_scene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="w-full h-full bg-black"></div>`;
});
const Prediction_scene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showCardDisplay, $$unsubscribe_showCardDisplay;
  let $currentDisplayedScene, $$unsubscribe_currentDisplayedScene;
  let $roadmapData, $$unsubscribe_roadmapData;
  $$unsubscribe_showCardDisplay = subscribe(showCardDisplay, (value) => $showCardDisplay = value);
  $$unsubscribe_currentDisplayedScene = subscribe(currentDisplayedScene, (value) => $currentDisplayedScene = value);
  $$unsubscribe_roadmapData = subscribe(roadmapData, (value) => $roadmapData = value);
  const getDataFromId = (dataSource, currentState) => dataSource.find((data) => data.id === currentState) ?? dataSource[0];
  const getItem = (card, item) => item === 0 ? "start" : allItems[card.items[item - 1]].fileName;
  $$unsubscribe_showCardDisplay();
  $$unsubscribe_currentDisplayedScene();
  $$unsubscribe_roadmapData();
  return `<div class="bg-black absolute inset-0 w-full h-full overflow-hidden"><img class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2" src="backgrounds/cards/cards-bg.png" alt="card choice background"></div>

${$showCardDisplay ? `${validate_component(Bg_video, "BgVideo").$$render(
    $$result,
    {
      cover: true,
      src: "scenes/" + getDataFromId(allCards, $currentDisplayedScene).fileName + "/" + getItem(getDataFromId(allCards, $currentDisplayedScene), $roadmapData?.currentTab ?? 0) + ".mp4"
    },
    {},
    {}
  )}` : ``}`;
});
const Cards_scene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-black absolute inset-0 w-full h-full overflow-hidden"><img class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2" src="backgrounds/cards/cards-bg.png" alt="card choice background"></div>`;
});
const Results_scene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="w-full h-full bg-black"></div>`;
});
const Customize_scene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="w-full h-full bg-black"></div>`;
});
const introContent_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".intro-header.svelte-1dvonh3{-webkit-mask-image:-webkit-gradient(\n			linear,\n			center top,\n			center bottom,\n			from(rgba(0, 0, 0, 1)),\n			to(rgba(0, 0, 0, 0))\n		)}",
  map: null
};
const Intro_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `${``}`;
});
const End_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="text-center mb-4">${escape(Lang.endTitle)}</h1>`;
});
const Prediction_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showCardDisplay, $$unsubscribe_showCardDisplay;
  let $roadmapData, $$unsubscribe_roadmapData;
  let $seenCardsState, $$unsubscribe_seenCardsState;
  $$unsubscribe_showCardDisplay = subscribe(showCardDisplay, (value) => $showCardDisplay = value);
  $$unsubscribe_roadmapData = subscribe(roadmapData, (value) => $roadmapData = value);
  $$unsubscribe_seenCardsState = subscribe(seenCardsState, (value) => $seenCardsState = value);
  $$unsubscribe_showCardDisplay();
  $$unsubscribe_roadmapData();
  $$unsubscribe_seenCardsState();
  return `${$showCardDisplay ? `<div class="flex h-full justify-end items-end relative bottom-0">${[...new Set($roadmapData?.seenItems)].length >= 3 ? `<div class="flex gap-8 pr-8"><button class="rounded-full border border-zinc-500 hover:bg-zinc-700 overflow-clip h-12 w-12" type="button"><img src="nav/repeat.png" alt="repeat" style="object-position: -0.1px 0"></button>

				${[...new Set($seenCardsState)].length >= 3 ? `<button class="px-6 py-2 border border-zinc-500 rounded-md hover:bg-zinc-700" type="button">${escape(Lang.scene.gotoResults)}</button>` : `<button class="px-6 py-2 border border-zinc-500 rounded-md hover:bg-zinc-700" type="button">${escape(Lang.scene.nextScreenButton)}</button>`}</div>` : ``}</div>` : ``}`;
});
const cardsContent_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".responsive.svelte-1u6i5zd{height:20vh;max-height:120px}",
  map: null
};
const angleChange = 2.5;
const cardAmount = 22;
const duration = 800;
const Cards_content = create_ssr_component(($$result, $$props, $$bindings, slots$1) => {
  let $selectedCardsState, $$unsubscribe_selectedCardsState;
  $$unsubscribe_selectedCardsState = subscribe(selectedCardsState, (value) => $selectedCardsState = value);
  let innerWidth;
  let cards = new Array();
  let slots = new Array();
  const angle = (id) => (Math.PI / 1.5 * id - cardAmount) * angleChange;
  const cardRotation = (card) => `transform-origin: center ${innerWidth / 3}px; rotate: ${angle(card.id)}deg; z-index: ${card.id}`;
  $$result.css.add(css$1);
  $$unsubscribe_selectedCardsState();
  return `

${$$result.head += `<!-- HEAD_svelte-kh6shr_START -->${each($selectedCardsState, (card) => {
    return `<link rel="preload" as="image"${add_attribute("href", `cards/${card.fileName}.png`, 0)}>
		<link rel="preload" as="image"${add_attribute("href", `cards/small/${card.fileName}.png`, 0)}>`;
  })}<!-- HEAD_svelte-kh6shr_END -->`, ""}

<div class="flex flex-col"><div class="flex-1 flex flex-col py-8"><div class="responsive col-span-3 grid justify-center svelte-1u6i5zd">${cards.length === 0 ? `<div class="col-start-1 row-start-1 invisible"></div>` : `${each(cards, (card, index) => {
    return `<div class="card responsive col-start-1 row-start-1 svelte-1u6i5zd">${slots.length < 3 ? `<button type="button" class="${[
      "card responsive border border-black transition-all svelte-1u6i5zd",
      card.selected ? "hidden" : ""
    ].join(" ").trim()}"${add_attribute("style", cardRotation(card), 0)}><img src="cards/behind.png" alt="card background">
							</button>` : ``}
					</div>`;
  })}`}</div>

		<div class="responsive self-center col-span-3 grid grid-cols-1 mt-14 pt-16 transition-all duration-700 svelte-1u6i5zd"${add_attribute("style", "", 0)}>${slots.length === 0 ? `<div class="card responsive invisible svelte-1u6i5zd"></div>` : `${each(slots, (card, index) => {
    return `<div class="card responsive col-start-1 row-start-1 grid border border-black transition-all svelte-1u6i5zd" style="${"transition-duration: " + escape(duration, true) + "ms; " + escape(
      card.animating ? "translate: 0 calc(max(-20vh, -120px) - 7.5rem); " + cardRotation(card) : `translate: calc(${index} * (min(20vh, 120px) * (0.617 + 0.25)) - min(20vh, 120px)) 0`,
      true
    )}"><img class="${[
      "col-start-1 row-start-1 transition-all",
      " scale-x-100"
    ].join(" ").trim()}" src="cards/behind.png" alt="card background" style="${"transition-duration: " + escape(duration / 4, true) + "ms; transition-delay: " + escape(index * duration / 4, true) + "ms"}">

						<img class="${[
      "col-start-1 row-start-1 transition-all dur",
      " scale-x-0"
    ].join(" ").trim()}"${add_attribute("src", `cards/${"small/"}${$selectedCardsState[index].fileName}.png`, 0)}${add_attribute("alt", $selectedCardsState[index].title, 0)} style="${"transition-duration: " + escape(duration / 4, true) + "ms; transition-delay: " + escape((1 + index) * duration / 4, true) + "ms"}">
					</div>`;
  })}`}</div>

		${`<div class="grid self-center -mt-24 pt-2">${each(Lang.timelineNames, (name, index) => {
    return `<div class="flex flex-col col-start-1 row-start-1 space-y-2 items-center" style="${"translate: calc(" + escape(index, true) + " * (min(20vh, 120px) * (0.617 + 0.25)) - min(20vh, 120px)) 0"}"><p class="font-maruburi">${escape(name)}</p>

						${!slots[index] ? `<div class="card responsive border-2 border-dashed border-zinc-600 svelte-1u6i5zd"></div>` : ``}
					</div>`;
  })}</div>`}</div>
</div>`;
});
const Results_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedCardsState, $$unsubscribe_selectedCardsState;
  let $predictionState, $$unsubscribe_predictionState;
  $$unsubscribe_selectedCardsState = subscribe(selectedCardsState, (value) => $selectedCardsState = value);
  $$unsubscribe_predictionState = subscribe(predictionState, (value) => $predictionState = value);
  const memoize = (func) => {
    const memo = /* @__PURE__ */ new WeakMap();
    return (obj) => {
      if (!memo.has(obj)) {
        memo.set(obj, func(obj));
      }
      return memo.get(obj);
    };
  };
  const item = memoize((card) => allItems.find((item2) => item2.id === card.items[0]) ?? allItems[0]);
  $$unsubscribe_selectedCardsState();
  $$unsubscribe_predictionState();
  return `<div class="flex flex-col gap-8 h-full"><section class="flex-1 flex gap-8"><div class="flex gap-4" style="flex: 3">${each($selectedCardsState, (card, index) => {
    return `<div class="flex-1 flex flex-col gap-4 justify-center"><div><h5 class="text-center font-maruburi">${escape(Lang.timelineNames[index])}</h5>

						<div class="mx-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div></div>

					<img${add_attribute("src", `cards/small/${card.fileName}.png`, 0)}${add_attribute("alt", card.title, 0)}>
				</div>`;
  })}</div>

		<div class="flex flex-col gap-1 overflow-auto" style="flex: 2"><div class="px-4 py-2 rounded-lg bg-zinc-800 text-xl self-start">${escape(allPredictions.find((p) => p.id === $predictionState)?.title)}
				${escape(Lang.results.predictionHeader)}</div>

			<h3 class="text-xl py-3 font-maruburi">${escape(Lang.results.header)}</h3>

			<div class="relative flex-1 max-h-60 overflow-hidden"><p class="custom-scrollbar overflow-y-auto w-full pb-12 pr-2 max-h-60">${escape(Lang.results.content)}</p>

				<div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black pointer-events-none"></div></div>

			<div class="flex flex-col px-6 py-4 border border-zinc-700 rounded-md mt-6 self-start"><h5 class="font-maruburi">${escape(Lang.results.cardInfoHeader)}</h5>

				<p><span class="text-sm">${escape(Lang.results.cardInfoHL)}</span>

					<span class="text-zinc-400 text-xs">${escape(Lang.results.cardInfoNormal)}</span></p>

				<div class="flex gap-2 py-4 overflow-x-auto custom-scrollbar">${each($selectedCardsState, (card) => {
    return `<div class="flex flex-col gap-2"><div class="bg-zinc-700 rounded-md border border-zinc-600 p-2"><img${add_attribute("src", `items/${item(card).fileName}.png`, 0)}${add_attribute("alt", item(card).name, 0)} class="aspect-1 w-16"></div>

							<p class="text-center"><span class="text-zinc-400 text-xs">${escape(item(card).info)}</span>

								<span class="text-sm">${escape(item(card).name)}
								</span></p>
						</div>`;
  })}</div></div>

			<div class="flex"><p class="h-5 w-5 pl-2 mr-1 rounded-full bg-zinc-700 text-white text-sm scale-75 font-maruburi rotate-12">i
				</p>

				<p class="text-zinc-600 text-xs">${escape(Lang.results.warningInfo)}</p></div></div></section>

	<div class="self-end space-x-4"><button class="btn border bg-stone-700 text-white border-stone-400 hover:bg-stone-400" type="button">${escape(Lang.results.makeCardButton)}</button>

		<button class="btn border bg-stone-700 text-white border-stone-400 hover:bg-stone-400" type="button">${escape(Lang.results.nextButton)}</button></div></div>`;
});
const customizeContent_svelte_svelte_type_style_lang = "";
const css = {
  code: ".octagon.svelte-1bg7yrf{clip-path:polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%);display:flex;justify-content:center;align-items:center;border:none}",
  map: null
};
const Customize_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const attributes = [
    {
      id: 0,
      value: "bg-blue-500",
      name: "Blue"
    },
    { id: 1, value: "bg-red-500", name: "Red" },
    {
      id: 2,
      value: "bg-green-500",
      name: "Green"
    },
    {
      id: 3,
      value: "bg-yellow-500",
      name: "Yellow"
    }
  ];
  let selectedAttribute = "";
  $$result.css.add(css);
  return `<div class="flex gap-4 pt-8"><div class="flex-1"><div class="${"card rounded-[3.5rem] max-h-full p-4 m-4 ring-offset-2 ring-gray-600 ring-offset-black ring-2 ring-opacity-100 " + escape(selectedAttribute, true) + " svelte-1bg7yrf"}"></div></div>

	<div class="flex flex-col gap-12 text-xs"><div class="flex gap-4 custom-scrollbar p-1 pb-4">${each(attributes, (attribute, index) => {
    return `<button class="${[
      "btn w-14 h-36 rounded overflow-clip ring-2 ring-offset-2 ring-offset-black " + escape(attribute.value, true) + " svelte-1bg7yrf",
      (selectedAttribute !== attribute.value ? "ring-gray-600" : "") + " " + (selectedAttribute === attribute.value ? "ring-white" : "")
    ].join(" ").trim()}" type="button"></button>`;
  })}</div>

		<div class="mx-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>

		<div class="flex gap-4 custom-scrollbar pb-4">${each(attributes, (attribute, index) => {
    return `<div class="${[
      "octagon aspect-1 w-[6.6rem] transition svelte-1bg7yrf",
      (selectedAttribute !== attribute.value ? "bg-gray-600" : "") + " " + (selectedAttribute === attribute.value ? "bg-white" : "")
    ].join(" ").trim()}"><div class="octagon aspect-1 w-[6.4rem] bg-black svelte-1bg7yrf"><button class="${"btn aspect-1 w-24 octagon px-4 py-2 hover:bg-gray-200 mt-[0.2rem] overflow-clip ring-1 ring-offset-1 ring-gray-400 ring-offset-gray-300 " + escape(attribute.value, true) + " svelte-1bg7yrf"}" type="button">${escape(attribute.name)}
						</button></div>
				</div>`;
  })}</div></div>
</div>`;
});
const Popup_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
const videoState = writable("");
const Selection_scene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $videoState, $$unsubscribe_videoState;
  $$unsubscribe_videoState = subscribe(videoState, (value) => $videoState = value);
  $$unsubscribe_videoState();
  return `<div class="bg-black absolute inset-0 w-full h-full overflow-hidden"><img class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2" src="backgrounds/cards/cards-bg.png" alt="card choice background"></div>

${validate_component(Bg_video, "BgVideo").$$render(
    $$result,
    {
      src: "backgrounds/selection/whole-animation.mp4"
    },
    {},
    {}
  )}

${$videoState !== "" ? `${validate_component(Bg_video, "BgVideo").$$render(
    $$result,
    {
      src: "backgrounds/selection/" + $videoState + ".mp4"
    },
    {},
    {}
  )}` : ``}`;
});
const Selection_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-full grid grid-cols-2 gap-16 max-w-7xl mx-auto py-12 px-8 sm:px-16 lg:grid-cols-4">${each(allPredictions, (prediction) => {
    return `<button class="space-y-4 group max-w-[6rem] mx-auto lg:space-y-20 lg:max-w-[12rem]" type="button"><div class="grid text-center mb-4 text-2xl font-maruburi sm:text-3xl lg:text-5xl"><h2 class="col-start-1 row-start-1 blur-md transition-all opacity-0 group-hover:opacity-80 group-focus:opacity-80">${escape(prediction.title)}</h2>

				<h2 class="col-start-1 row-start-1">${escape(prediction.title)}
				</h2></div>

			<div class="h-1/2"></div>
			
		</button>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $viewState, $$unsubscribe_viewState;
  $$unsubscribe_viewState = subscribe(viewState, (value) => $viewState = value);
  const viewComponents = [
    {
      state: "intro",
      component: Intro_content,
      scene: Intro_scene
    },
    {
      state: "selection",
      component: Selection_content,
      scene: Selection_scene
    },
    {
      state: "cards",
      component: Cards_content,
      scene: Cards_scene
    },
    {
      state: "scene",
      component: Prediction_content,
      scene: Prediction_scene
    },
    {
      state: "results",
      component: Results_content,
      scene: Results_scene
    },
    {
      state: "customize",
      component: Customize_content,
      scene: Customize_scene
    },
    {
      state: "end",
      component: End_content,
      scene: End_scene
    }
  ];
  $$unsubscribe_viewState();
  return `<div class="absolute inset-0">${each(viewComponents, ({ state, scene }) => {
    return `${$viewState === state ? `${validate_component(scene || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``}`;
  })}</div>

<section class="py-8 px-4 sm:px-8 grid grid-rows-layout absolute inset-0 overflow-hidden"><header class="justify-self-start">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>

	<section class="justify-self-end">${validate_component(Roadmap, "Roadmap").$$render($$result, {}, {}, {})}</section>

	<main class="col-span-2 justify-self-center self-center w-full h-full text-white">${each(viewComponents, ({ state, component }) => {
    return `${$viewState === state ? `${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``}`;
  })}</main>

	<footer class="col-span-2 justify-self-center self-end">${validate_component(Description, "Description").$$render($$result, {}, {}, {})}</footer></section>

<section class="absolute inset-0 pointer-events-none">${validate_component(Click_indicators, "ClickIndicators").$$render($$result, {}, {}, {})}

	${validate_component(Popup_modal, "PopupModal").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
