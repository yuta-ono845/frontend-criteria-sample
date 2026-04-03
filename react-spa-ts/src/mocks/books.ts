import { Book } from "../types/book";

export const mockBooks: Book[] = [
  {
    id: 1,
    title: "React設計入門",
    author: "田中太郎",
    description: "Reactのコンポーネント設計と状態管理を学ぶサンプルです。",
    tags: ["React", "TypeScript", "SPA"],
    averageRating: 4.5,
  },
  {
    id: 2,
    title: "Next.jsガイド",
    author: "佐藤花子",
    description: "Next.js App Router の基本を押さえるための資料です。",
    tags: ["Next.js", "Server Component"],
    averageRating: 4.2,
  },
];
