import { techs } from "./consts";

let cards = null;

/* Logica do jogo */
startGame();

export function startGame() {
  cards = createCardsFromTechs(techs);
  shuffleCards(cards);
  InitializeCards();

  return cards;
}

export default function InitializeCards() {}

function shuffleCards(cards: { id: string; icon: string; flipped: boolean }[]) {
  let currentIndex = cards.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [cards[randomIndex], cards[currentIndex]] = [
      cards[currentIndex],
      cards[randomIndex],
    ];
  }
}

function createCardsFromTechs(techs: string[]) {
  let cards = [];

  for (let tech of techs) {
    cards.push(createpairFromTech(tech));
  }

  return cards.flatMap((pair) => pair);
}

function createpairFromTech(tech: string) {
  return [
    {
      id: createIdWithTech(tech),
      icon: tech,
      flipped: false,
      matched: false,
    },
    {
      id: createIdWithTech(tech),
      icon: tech,
      flipped: false,
      matched: false,
    },
  ];
}

function createIdWithTech(tech: string) {
  return tech + Math.random() * 1000;
}
