import type { ReactNode } from "react";

interface ComponentDivProps {
  children: ReactNode;
  className?: string;
  marginTop?: boolean;
}

function ComponentDiv({
  children,
  marginTop = true,
  className = "",
}: ComponentDivProps) {
  return (
    <div
      className={`p-4 ${marginTop ? "mt-20 " : "lg:mt-0"}  mx-auto max-w-(--breakpoint-2xl) md:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default ComponentDiv;
