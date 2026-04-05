// interface はデータオブジェクトの形を決めるために使える。
interface Book {
  id: number;
  title: string;
  description: string;
}

// Promise<Book> の <Book> はジェネリクスで、「最終的に Book 型が返る」という意味。
async function getBook(id: number): Promise<Book> {
  const response = await fetch(`https://example.com/api/books/${id}`, {
    cache: "no-store",
  });

  return response.json() as Promise<Book>;
}

function BookView({ book }: { book: Book }) {
  return (
    <section>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </section>
  );
}

// app/books/[id]/page.tsx を想定した最小サンプル
export default async function Page({ params }: { params: { id: string } }) {
  const book = await getBook(Number(params.id));

  return (
    <main>
      <BookView book={book} />
    </main>
  );
}
