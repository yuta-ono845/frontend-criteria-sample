import { ReactNode, useEffect, useState } from "react";

// 画面の状態を文字列リテラル型で表現している。
type Page = "list" | "detail";

// TypeScript で画面表示に使うデータの型を定義している。
interface Book {
  id: number;
  title: string;
  author: string;
}

type ApiResponse<T> = {
  data: T;
};

async function requestJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const json = (await response.json()) as ApiResponse<T>;
  return json.data;
}

async function fetchBooks(keyword: string): Promise<Book[]> {
  return requestJson<Book[]>(`/api/books?keyword=${encodeURIComponent(keyword)}`);
}

// Atom:
// 最小単位の部品。親から label と onClick を props で受け取る。
function PrimaryButton({ label, onClick }: { label: string; onClick: () => void }) {
  return <button onClick={onClick}>{label}</button>;
}

// Molecule:
// 入力欄 1 つだが、入力値と変更処理は親から props で受け取る。
function SearchBox({
  keyword,
  onKeywordChange,
}: {
  keyword: string;
  onKeywordChange: (value: string) => void;
}) {
  return (
    <input
      value={keyword}
      placeholder="タイトル検索"
      onChange={(event) => onKeywordChange(event.target.value)}
    />
  );
}

// Organism:
// 一覧表示のまとまり。books を親から受け取り、クリック時は onSelect で親へ通知する。
function BookList({
  books,
  onSelect,
}: {
  books: Book[];
  onSelect: (book: Book) => void;
}) {
  return (
    <section>
      {books.map((book) => (
        <article key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <PrimaryButton label="詳細" onClick={() => onSelect(book)} />
        </article>
      ))}
    </section>
  );
}

// Template:
// 画面全体の共通レイアウトを担当する。
function ScreenLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

// Page:
// 一覧画面。SearchBox と BookList に props を渡して構成している。
function BookListPage({
  books,
  keyword,
  onKeywordChange,
  onSelect,
}: {
  books: Book[];
  keyword: string;
  onKeywordChange: (value: string) => void;
  onSelect: (book: Book) => void;
}) {
  return (
    <ScreenLayout title="React SPA Sample">
      <SearchBox keyword={keyword} onKeywordChange={onKeywordChange} />
      <BookList books={books} onSelect={onSelect} />
    </ScreenLayout>
  );
}

// Page:
// 詳細画面。選択された book を親から受け取り、戻る処理も props で受け取る。
function BookDetailPage({ book, onBack }: { book: Book; onBack: () => void }) {
  return (
    <ScreenLayout title="Book Detail">
      <p>{book.title}</p>
      <p>{book.author}</p>
      <PrimaryButton label="一覧へ戻る" onClick={onBack} />
    </ScreenLayout>
  );
}

export default function App() {
  // React の state。画面に応じて値が変わるデータを useState で管理する。
  const [page, setPage] = useState<Page>("list");
  const [keyword, setKeyword] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // keyword が変わったときに API を呼び、取得した一覧で books を更新する。
  useEffect(() => {
    void fetchBooks(keyword).then(setBooks);
  }, [keyword]);

  // state を見て、一覧画面か詳細画面かを切り替えている。
  if (page === "detail" && selectedBook) {
    return <BookDetailPage book={selectedBook} onBack={() => setPage("list")} />;
  }

  return (
    <BookListPage
      books={books}
      keyword={keyword}
      // 親の state 更新関数をそのまま子へ渡すことで、子から親の状態を変えられる。
      onKeywordChange={setKeyword}
      onSelect={(book) => {
        // 子から受け取った book を state に保存し、詳細画面へ切り替える。
        setSelectedBook(book);
        setPage("detail");
      }}
    />
  );
}
