import { useRef, type FormEvent } from "react";
type NewGoalProps = {
  onAddGoals: (goals: string, summaryGoal: string) => void;
};

export default function NewGoal({ onAddGoals }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summaryGoal = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summaryGoal.current!.value;

    event.currentTarget.reset();
    if (enteredGoal.length > 0 && enteredSummary.length > 0) {
      onAddGoals(enteredGoal, enteredSummary);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal}></input>
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summaryGoal}></input>
      </p>
      <button onClick={() => onAddGoals}>Add Goal</button>
    </form>
  );
}
