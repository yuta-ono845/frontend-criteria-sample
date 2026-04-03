import { useState } from "react";
import { SearchForm } from "../components/molecules/SearchForm";
import { BookList } from "../components/organisms/BookList";
import { AppLayout } from "../components/templates/AppLayout";
import { useBooks } from "../hooks/useBooks";

export function BookListPage() {
  const [draftKeyword, setDraftKeyword] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const { books, loading, error } = useBooks(keyword);

  return (
    <AppLayout title="書籍レビューSPA">
      <SearchForm
        keyword={draftKeyword}
        onKeywordChange={setDraftKeyword}
        onSubmit={() => setKeyword(draftKeyword)}
      />

      {loading && <p>読み込み中です。</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <BookList books={books} />}
    </AppLayout>
  );
}
