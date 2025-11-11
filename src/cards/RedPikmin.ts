import { CardClass } from "../enums/CardClass";
import { Rarity } from "../enums/Rarity";
import { Minion } from "../models/Minion";
import type { Player } from "../models/Player";

export class RedPikmin extends Minion {
    constructor(player: Player) {
        super(
            player,
            -1,
            "1",
            1,
            "",
            CardClass.Fighting,
            Rarity.Common,
            "Red Pikmin",
            {
                base: 1,
                value: 1,
            },
            {
                base: 1,
                value: 1,
            },
            [],
            [],
            [],
            [],
            "",
            "",
            {
                base: 1,
                value: 1,
            },
            {
                base: 2,
                value: 2,
            },
            2,
            {
                base: 0,
                value: 0,
            },
            1,
            [],
            false,
            false,
            0,
            0,
            0,
            false,
        );
    }
}
