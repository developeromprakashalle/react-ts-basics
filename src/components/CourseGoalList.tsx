import CourseGoals from "./CourseGoals";
import { type CourseGoals as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import type { ReactNode } from "react";
type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start Adding Goals
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">You are collecting lot of goals.</InfoBox>
    );
  }

  return (
    <>
      {warningBox}

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals
              title={goal.title}
              id={goal.id}
              onDelete={onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>
    </>
  );
}
