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
    <div className={` ${marginTop ? "" : "mt-16 lg:mt-0"}  ${className}`}>
      {children}
    </div>
  );
}

export default ComponentDiv;
