import { RedPikmin } from "./cards/RedPikmin";
import { CardClass } from "./enums/CardClass";
import { Phase } from "./enums/Phase";
import { Deck } from "./models/Deck";
import { Game } from "./models/Game";
import { Lane } from "./models/Lane";
import type { Minion } from "./models/Minion";
import { Player } from "./models/Player";

console.log("Pikcards Web App (Backend CLI Test)");

// create P1
var p1Deck = new Deck("P1's Deck", [], [CardClass.Fighting, CardClass.Booster]);
var p1 = new Player("P1", p1Deck, p1Deck, [], [], 0, false);

// create P2
var p2Deck = new Deck("P2's Deck", [], [CardClass.Fighting, CardClass.Survival]);
var p2 = new Player("P2", p2Deck, p2Deck, [], [], 0, true);

// populate decks
for (let i = 0; i < 10; i++) {
    p1Deck.cards.push(new RedPikmin(p1));
    p2Deck.cards.push(new RedPikmin(p2));
}

// create lanes
var lanes: Lane[] = [];
for (let i = 0; i < 5; i++)
    lanes.push(new Lane());

// create game
var game = new Game(p1, p2, 0, Phase.Morning, lanes, 0);

// player 1 draw card to hand
game.player1.hand.push(game.player1.currentDeck.cards.pop()!);

// player 1 plays card in lane 1
game.board[0]!.p1Minion = game.player1.hand.pop()! as Minion;

console.log(`

Game: ${game}
Player 1: "${game.player1.name}"
Player 2: "${game.player2.name}"

Lane 1 p1Minion: ${game.board[0]!.p1Minion!.name}

`);
