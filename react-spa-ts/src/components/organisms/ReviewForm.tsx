import { FormEvent, useState } from "react";
import { Button } from "../atoms/Button";
import { ReviewInput } from "../../types/book";

type ReviewFormProps = {
  onSubmit: (input: ReviewInput) => Promise<void>;
};

export function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState<string>("5");
  const [comment, setComment] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await onSubmit({
      rating: Number(rating),
      comment,
    });

    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        評価
        <select value={rating} onChange={(event) => setRating(event.target.value)}>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
        </select>
      </label>

      <label>
        コメント
        <textarea value={comment} onChange={(event) => setComment(event.target.value)} />
      </label>

      <Button type="submit">レビュー送信</Button>
    </form>
  );
}
