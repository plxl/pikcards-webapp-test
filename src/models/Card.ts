import type { CardClass } from "../enums/CardClass";
import type { Element } from "../enums/Element";
import type { Family } from "../enums/Family";
import type { Rarity } from "../enums/Rarity";
import type { Trait } from "../enums/Trait";
import type { Player } from "./Player";

export interface NumberWithBase {
    value: number;
    base: number;
}

export class Card {
    public id: number;

    constructor(
        public playerOwner: Player,
        public laneEntered: number,
        public set: string,
        public number: number,
        public imagePath: string,
        public cardClass: CardClass,
        public rarity: Rarity,
        public name: string,
        public energyCost: NumberWithBase,
        public timeCost: NumberWithBase,
        public elements: Element[],
        public traits: Trait[],
        public families: Family[],
        public immunities: (Element | Trait | Family)[],
        public weaknesses: string,
        public abilities: string,
    ) {
        this.id = 0;
    }
}
