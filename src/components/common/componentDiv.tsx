import type { ReactNode } from "react";

interface ComponentDivProps {
  children: ReactNode;
  className?: string;
}

function ComponentDiv({ children, className = "" }: ComponentDivProps) {
  return (
    <div className={`p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6 ${className}`}>
      {children}
    </div>
  );
}

export default ComponentDiv;
