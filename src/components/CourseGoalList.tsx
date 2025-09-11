import CourseGoals from "./CourseGoals";
import { type CourseGoals as CGoal } from "../App.tsx";
type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoals title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
}
