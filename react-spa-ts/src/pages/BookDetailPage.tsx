import { useParams } from "react-router-dom";
import { ReviewForm } from "../components/organisms/ReviewForm";
import { AppLayout } from "../components/templates/AppLayout";
import { submitReview } from "../api/bookApi";

export function BookDetailPage() {
  const params = useParams<{ id: string }>();
  const bookId = Number(params.id);

  return (
    <AppLayout title="書籍詳細">
      <p>選択中の書籍ID: {bookId}</p>
      <ReviewForm onSubmit={(input) => submitReview(bookId, input).then(() => undefined)} />
    </AppLayout>
  );
}
