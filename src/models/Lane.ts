import type { Area } from "./Area";
import type { Minion } from "./Minion";

export class Lane {
    public id: number;
    public area: Area | null = null;
    public p1Minion: Minion | null = null;
    public p2Minion: Minion | null = null;

    constructor() {
        this.id = 0;
    }
}
