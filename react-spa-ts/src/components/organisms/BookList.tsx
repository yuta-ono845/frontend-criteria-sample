import { Link } from "react-router-dom";
import { Book } from "../../types/book";

type BookListProps = {
  books: Book[];
};

export function BookList({ books }: BookListProps) {
  return (
    <section>
      {books.map((book) => (
        <article key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <Link to={`/books/${book.id}`}>詳細を見る</Link>
        </article>
      ))}
    </section>
  );
}
