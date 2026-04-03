import Link from "next/link";
import { BookSummary } from "../types/book";

type BookCardProps = {
  book: BookSummary;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <article>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.summary}</p>
      <Link href={`/books/${book.id}`}>詳細へ</Link>
    </article>
  );
}
