import type { ReactNode } from "react";

import styles from "./SiteShell.module.css";

type SiteShellProps = {
  children: ReactNode;
  className?: string;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function SiteShell({ children, className }: SiteShellProps) {
  return <div className={joinClasses(styles.shell, className)}>{children}</div>;
}
