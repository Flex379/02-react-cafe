import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

export interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export const VoteOptions = (props: VoteOptionsProps) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => props.onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => props.onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => props.onVote("bad")}>
        Bad
      </button>
      {props.canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={props.onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};
