"use client";

import { useEffect, useState } from "react";

type Suit = "♠" | "♥" | "♦" | "♣";
type Rank = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";

type Card = { suit: Suit; rank: Rank };

type Phase = "loading" | "player" | "dealer" | "done";

const SUITS: Suit[] = ["♠", "♥", "♦", "♣"];
const RANKS: Rank[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function freshDeck(): Card[] {
  const deck: Card[] = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) deck.push({ suit, rank });
  }
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function handValue(hand: Card[]): number {
  let total = 0;
  let aces = 0;
  for (const card of hand) {
    if (card.rank === "A") {
      aces += 1;
      total += 11;
    } else if (card.rank === "J" || card.rank === "Q" || card.rank === "K") {
      total += 10;
    } else {
      total += Number(card.rank);
    }
  }
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }
  return total;
}

function CardFace({ card, hidden }: { card: Card; hidden?: boolean }) {
  const red = card.suit === "♥" || card.suit === "♦";
  if (hidden) {
    return (
      <div className="font-data flex h-[4.6rem] w-[3.3rem] items-center justify-center border border-edge bg-[repeating-linear-gradient(45deg,#26314c,#26314c_4px,#19233a_4px,#19233a_8px)] text-[0.65rem] text-haze">
        ?
      </div>
    );
  }
  return (
    <div
      className={`font-data flex h-[4.6rem] w-[3.3rem] flex-col items-center justify-center gap-1 border bg-paper text-[1rem] leading-none ${
        red ? "border-[#8a3f3f] text-[#8a3f3f]" : "border-ink/40 text-ink"
      }`}
    >
      <span>{card.rank}</span>
      <span className="text-[1.1rem]">{card.suit}</span>
    </div>
  );
}

export default function Blackjack() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [deck, setDeck] = useState<Card[]>([]);
  const [player, setPlayer] = useState<Card[]>([]);
  const [dealer, setDealer] = useState<Card[]>([]);
  const [message, setMessage] = useState<string>("");
  const [record, setRecord] = useState({ wins: 0, losses: 0, pushes: 0 });

  const newGame = () => {
    const d = freshDeck();
    const p = [d.pop()!, d.pop()!];
    const h = [d.pop()!, d.pop()!];
    setDeck(d);
    setPlayer(p);
    setDealer(h);
    setMessage("");

    if (handValue(p) === 21) {
      setPhase("done");
      setMessage("Blackjack — you win.");
      setRecord((r) => ({ ...r, wins: r.wins + 1 }));
    } else {
      setPhase("player");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only random deal, must run after mount to avoid SSR/hydration mismatch
    newGame();
  }, []);

  const hit = () => {
    if (phase !== "player") return;
    const d = [...deck];
    const card = d.pop()!;
    const p = [...player, card];
    setDeck(d);
    setPlayer(p);

    if (handValue(p) > 21) {
      setPhase("done");
      setMessage("Bust — dealer wins.");
      setRecord((r) => ({ ...r, losses: r.losses + 1 }));
    }
  };

  const stand = () => {
    if (phase !== "player") return;
    setPhase("dealer");

    const d = [...deck];
    let h = [...dealer];
    while (handValue(h) < 17) {
      const card = d.pop()!;
      h = [...h, card];
    }
    setDeck(d);
    setDealer(h);

    const playerTotal = handValue(player);
    const dealerTotal = handValue(h);

    let outcome: "wins" | "losses" | "pushes";
    let text: string;
    if (dealerTotal > 21 || playerTotal > dealerTotal) {
      outcome = "wins";
      text = dealerTotal > 21 ? "Dealer busts — you win." : "You win.";
    } else if (dealerTotal > playerTotal) {
      outcome = "losses";
      text = "Dealer wins.";
    } else {
      outcome = "pushes";
      text = "Push.";
    }

    setMessage(text);
    setRecord((r) => ({ ...r, [outcome]: r[outcome] + 1 }));
    setPhase("done");
  };

  const dealerHidden = phase === "player";
  const playerTotal = handValue(player);
  const dealerTotal = handValue(dealer);

  return (
    <div className="border border-edge bg-panel p-[clamp(1.2rem,3vw,2rem)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-edge pb-4">
        <p className="font-data m-0 text-[0.7rem] uppercase tracking-[0.25em] text-haze">
          Dealer &mdash; {dealerHidden ? "??" : dealerTotal}
        </p>
        <p className="font-data m-0 text-[0.7rem] uppercase tracking-[0.25em] text-haze">
          W {record.wins} &nbsp;/&nbsp; L {record.losses} &nbsp;/&nbsp; P {record.pushes}
        </p>
      </div>

      <div className="flex min-h-[5.5rem] flex-wrap items-center gap-2 py-5">
        {dealer.map((card, i) => (
          <CardFace key={i} card={card} hidden={dealerHidden && i === 1} />
        ))}
      </div>

      <div className="flex min-h-[5.5rem] flex-wrap items-center gap-2 border-t border-edge pt-5">
        {player.map((card, i) => (
          <CardFace key={i} card={card} />
        ))}
      </div>

      <p className="font-data m-0 mt-1 text-[0.7rem] uppercase tracking-[0.25em] text-haze">
        You &mdash; {playerTotal}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-edge pt-5">
        {phase === "player" ? (
          <>
            <button
              onClick={hit}
              className="font-data cursor-pointer border border-brass px-5 py-2 text-[0.72rem] uppercase tracking-[0.2em] text-champagne transition-colors hover:bg-brass hover:text-ink"
            >
              Hit
            </button>
            <button
              onClick={stand}
              className="font-data cursor-pointer border border-edge px-5 py-2 text-[0.72rem] uppercase tracking-[0.2em] text-haze transition-colors hover:border-haze hover:text-paper"
            >
              Stand
            </button>
          </>
        ) : (
          <button
            onClick={newGame}
            className="font-data cursor-pointer border border-brass px-5 py-2 text-[0.72rem] uppercase tracking-[0.2em] text-champagne transition-colors hover:bg-brass hover:text-ink"
          >
            New Hand
          </button>
        )}
        {message && (
          <p className="font-data m-0 text-[0.75rem] uppercase tracking-[0.15em] text-patina">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
