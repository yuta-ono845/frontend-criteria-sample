import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <header>
          <h1>Next.js 書籍サンプル</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
