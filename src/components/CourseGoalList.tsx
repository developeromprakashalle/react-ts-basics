import CourseGoals from "./CourseGoals";
import { type CourseGoals as CGoal } from "../App.tsx";
type CourseGoalListProps = {
  goals: CGoal[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoals title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
}
