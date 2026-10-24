import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import type { Votes, VoteType } from "../../types/votes";
import { VoteOptions } from "../VoteOptions/VoteOptions";
import { VoteStats } from "../VoteStats/VoteStats";
import { Notification } from "../Notification/Notification";

export function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  function handleVote(type: VoteType) {
    const newVotes = { ...votes };
    newVotes[type] = newVotes[type] + 1;
    setVotes(newVotes);
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const totalVotes = votes.bad + votes.good + votes.neutral;
  const positiveRate = Math.round(
    totalVotes > 0 ? (votes.good / totalVotes) * 100 : 0,
  );

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />
        {totalVotes > 0 ? (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
