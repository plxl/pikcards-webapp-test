import type { CardClass } from "../enums/CardClass";
import type { Element } from "../enums/Element";
import type { Family } from "../enums/Family";
import type { Rarity } from "../enums/Rarity";
import type { Trait } from "../enums/Trait";
import { Card, type NumberWithBase } from "./Card";
import type { Item } from "./Item";
import type { Player } from "./Player";

export class Minion extends Card {
    constructor(
        playerOwner: Player,
        laneEntered: number,
        set: string,
        number: number,
        imagePath: string,
        cardClass: CardClass,
        rarity: Rarity,
        name: string,
        energyCost: NumberWithBase,
        timeCost: NumberWithBase,
        elements: Element[],
        traits: Trait[],
        families: Family[],
        immunities: (Element | Trait | Family)[],
        weaknesses: string,
        abilities: string,

        public attack: NumberWithBase,
        public health: NumberWithBase,
        public maxHealth: number,
        public defense: NumberWithBase,
        public maxCarry: number,
        public heldItems: Item[],
        public blindCard: boolean,
        public stunned: boolean,
        public petrifiedCounter: number,
        public panicCounter: number,
        public bubbleCounter: number,
        public hasBeenDamaged: boolean,
    ) {
        super(playerOwner, laneEntered, set, number, imagePath, cardClass, rarity, name, energyCost, timeCost, elements, traits, families, immunities, weaknesses, abilities);
    }
}

export class BurrowableMinion extends Minion {
    public burrowed: boolean = false;
    public justUnburrowed: boolean = false;
}

export class WallMinion extends Minion {
    public wallCounter: number = 0;
}
