import { notFound } from "next/navigation";
import { FavoriteButton } from "../../../components/FavoriteButton";
import { getBookById } from "../../../lib/book-data";

type BookPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params;
  const book = await getBookById(Number(id));

  if (!book) {
    notFound();
  }

  return (
    <main>
      <h2>{book.title}</h2>
      <p>{book.body}</p>
      <FavoriteButton initialCount={12} />
    </main>
  );
}
