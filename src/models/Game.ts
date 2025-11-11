import type { Phase } from "../enums/Phase";
import type { Lane } from "./Lane";
import type { Player } from "./Player";

export class Game {
    public id: number;

    constructor(
        public player1: Player,
        public player2: Player,
        public round: number,
        public roundPhase: Phase,
        public board: Lane[],
        public currencyTime: number,
    ) {
        this.id = 0;
    }
}
