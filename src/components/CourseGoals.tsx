import { type PropsWithChildren } from "react";

type CourseGoalsProps = PropsWithChildren<{ title: string }>;

export default function CourseGoals({ title, children }: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
