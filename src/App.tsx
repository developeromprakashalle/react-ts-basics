import { useState } from "react";
import { type ReactNode } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  function handleGoals(goals: string, summaryGoal: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoals = {
        id: Math.random(),
        title: goals,
        description: summaryGoal,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoals(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goals) => goals.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoals={handleGoals} />
      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoals}
      ></CourseGoalList>
    </main>
  );
}
