import { useEffect, useState } from "react";
import { fetchBooks } from "../api/bookApi";
import { Book } from "../types/book";

export function useBooks(keyword: string) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let active = true;

    const load = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await fetchBooks(keyword);
        if (active) {
          setBooks(data);
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : "一覧取得に失敗しました");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void load();

    return () => {
      active = false;
    };
  }, [keyword]);

  return { books, loading, error };
}
