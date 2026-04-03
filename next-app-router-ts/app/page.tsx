import { BookCard } from "../components/BookCard";
import { getBooks } from "../lib/book-data";

export default async function HomePage() {
  const books = await getBooks();

  return (
    <main>
      <h2>おすすめ一覧</h2>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </main>
  );
}
