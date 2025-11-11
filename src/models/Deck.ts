import type { CardClass } from "../enums/CardClass";
import type { Card } from "./Card";

export class Deck {
    public id: number;

    constructor(
        public name: string,
        public cards: Card[],
        public classes: [CardClass, CardClass],
    ) {
        this.id = 0;
    }
}
