import { ReactNode, useEffect, useState } from "react";

type Page = "list" | "detail";

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

// Atom
function PrimaryButton({ label, onClick }: { label: string; onClick: () => void }) {
  return <button onClick={onClick}>{label}</button>;
}

// Molecule
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

// Organism
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

// Template
function ScreenLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

// Page
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

// Page
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
  const [page, setPage] = useState<Page>("list");
  const [keyword, setKeyword] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    void fetchBooks(keyword).then(setBooks);
  }, [keyword]);

  if (page === "detail" && selectedBook) {
    return <BookDetailPage book={selectedBook} onBack={() => setPage("list")} />;
  }

  return (
    <BookListPage
      books={books}
      keyword={keyword}
      onKeywordChange={setKeyword}
      onSelect={(book) => {
        setSelectedBook(book);
        setPage("detail");
      }}
    />
  );
}
