import type { Card } from "./Card";
import type { Deck } from "./Deck";

export class Player {
    public id: number;

    constructor(
        public name: string,
        public fullDeck: Deck,
        public currentDeck: Deck,
        public hand: Card[],
        public discardPile: Card[],
        public currencyEnergy: number,
        public morningPlayer: boolean,
    ) {
        this.id = 0;
    }
}
