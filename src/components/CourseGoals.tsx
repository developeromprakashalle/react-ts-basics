import { type PropsWithChildren } from "react";

type CourseGoalsProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

export default function CourseGoals({
  title,
  id,
  children,
  onDelete,
}: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
