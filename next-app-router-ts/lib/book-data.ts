import { BookDetail } from "../types/book";

const books: BookDetail[] = [
  {
    id: 1,
    title: "Next.jsの基本",
    author: "田中太郎",
    summary: "App Router と Server Component の基礎。",
    body: "Server Component でデータ取得し、Client Component に props を渡す想定です。",
    tags: ["Next.js", "App Router"],
  },
  {
    id: 2,
    title: "Reactとの違い",
    author: "佐藤花子",
    summary: "Next.js は React ベースだが、ルーティングやデータ取得に約束がある。",
    body: "React単体ではライブラリを組み合わせるが、Next.js はフレームワークとして機能を持つ。",
    tags: ["React", "Framework"],
  },
];

export async function getBooks(): Promise<BookDetail[]> {
  return books;
}

export async function getBookById(id: number): Promise<BookDetail | undefined> {
  return books.find((book) => book.id === id);
}
