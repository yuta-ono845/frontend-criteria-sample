import { useState } from "react";

// enum は「取りうる値の候補」を名前付きでまとめるための書き方。
// 今回は画面状態を Home / Detail の2つに固定している。
enum Page {
  Home = "home",
  Detail = "detail",
}

// interface は「オブジェクトの形」を決める書き方。
interface BaseButtonProps {
  label: string;
  onClick: () => void;
}

// MessageCard が受け取る props の型。
interface MessageCardProps {
  title: string;
  buttonLabel: string;
  onClick: () => void;
}

// HomePage が親から受け取る props の型。
interface HomePageProps {
  title: string;
  onMoveToDetail: () => void;
}

// DetailPage が親から受け取る props の型。
interface DetailPageProps {
  message: string;
  onBack: () => void;
}

// Atomic Design の Atom にあたる最小部品。
// 他のコンポーネントから再利用できるボタン。
function BaseButton({ label, onClick }: BaseButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

// Atomic Design の Molecule にあたる部品。
// 見出しとボタンを組み合わせた小さな表示単位。
function MessageCard({ title, buttonLabel, onClick }: MessageCardProps) {
  return (
    <section>
      <h1>{title}</h1>
      <BaseButton label={buttonLabel} onClick={onClick} />
    </section>
  );
}

// 一覧画面の代わりになる最小ページ。
// Page にあたるコンポーネントで、Molecule を使って画面を作る。
function HomePage({ title, onMoveToDetail }: HomePageProps) {
  return <MessageCard title={title} buttonLabel="詳細ページへ" onClick={onMoveToDetail} />;
}

// 詳細画面の代わりになる最小ページ。
// こちらも Page にあたるコンポーネントで、同じ Molecule を再利用している。
function DetailPage({ message, onBack }: DetailPageProps) {
  return <MessageCard title={message} buttonLabel="ホームへ戻る" onClick={onBack} />;
}

// 親コンポーネント。
// state を持ち、その値に応じて画面を切り替える。
// ページ全体を再読み込みせずに表示だけ切り替えるので、最小SPAサンプルになっている。
export default function App() {
  // useState<Page> の <Page> はジェネリクスで、「この state は Page 型」と指定している。
  const [page, setPage] = useState<Page>(Page.Home);
  const [message] = useState<string>("詳細ページです");

  // page の値で表示する画面を分岐している。
  if (page === Page.Detail) {
    return (
      <main>
        <DetailPage message={message} onBack={() => setPage(Page.Home)} />
      </main>
    );
  }

  return (
    <main>
      <HomePage title="Hello SPA" onMoveToDetail={() => setPage(Page.Detail)} />
    </main>
  );
}
