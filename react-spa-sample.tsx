import { useState } from "react";

// どの画面を表示しているかを表す state 用の型。
type Page = "home" | "detail";

// HomePage が親から受け取る props の型。
type HomePageProps = {
  title: string;
  onMoveToDetail: () => void;
};

// DetailPage が親から受け取る props の型。
type DetailPageProps = {
  message: string;
  onBack: () => void;
};

// 一覧画面の代わりになる最小ページ。
// 親からタイトルと画面遷移用の関数を受け取る。
function HomePage({ title, onMoveToDetail }: HomePageProps) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={onMoveToDetail}>詳細ページへ</button>
    </section>
  );
}

// 詳細画面の代わりになる最小ページ。
// 親から表示文字列と戻る処理を受け取る。
function DetailPage({ message, onBack }: DetailPageProps) {
  return (
    <section>
      <h1>{message}</h1>
      <button onClick={onBack}>ホームへ戻る</button>
    </section>
  );
}

// 親コンポーネント。
// state を持ち、その値に応じて画面を切り替える。
// ページ全体を再読み込みせずに表示だけ切り替えるので、最小SPAサンプルになっている。
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [message] = useState<string>("詳細ページです");

  // page の値で表示する画面を分岐している。
  if (page === "detail") {
    return (
      <main>
        <DetailPage message={message} onBack={() => setPage("home")} />
      </main>
    );
  }

  return (
    <main>
      <HomePage title="Hello SPA" onMoveToDetail={() => setPage("detail")} />
    </main>
  );
}
