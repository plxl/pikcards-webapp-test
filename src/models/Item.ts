import { Card } from "./Card";
import type { Minion } from "./Minion";

export class Item extends Card {
    public holder: Minion | null = null;
}
