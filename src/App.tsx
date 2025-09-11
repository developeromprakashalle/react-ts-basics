import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  function handleGoals() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoals = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth!",
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
      <input type="text" placeholder="Enter your goal" value=""></input>
      <button onClick={handleGoals}>Add Goal</button>
      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoals}
      ></CourseGoalList>
    </main>
  );
}
