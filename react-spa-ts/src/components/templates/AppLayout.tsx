import { ReactNode } from "react";

type AppLayoutProps = {
  title: string;
  children: ReactNode;
};

export function AppLayout({ title, children }: AppLayoutProps) {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
