import { ApiResponse, Book, Review, ReviewInput, ReviewStatus } from "../types/book";
import { mockBooks } from "../mocks/books";

async function requestJson<T>(url: string, init?: RequestInit): Promise<ApiResponse<T>> {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<ApiResponse<T>>;
}

export async function fetchBooks(keyword: string): Promise<Book[]> {
  if (typeof window === "undefined") {
    return mockBooks;
  }

  const query = new URLSearchParams({ keyword }).toString();
  const result = await requestJson<Book[]>(`/api/books?${query}`);
  return result.data;
}

export async function submitReview(bookId: number, input: ReviewInput): Promise<Review> {
  if (typeof window === "undefined") {
    return {
      id: Date.now(),
      bookId,
      rating: input.rating,
      comment: input.comment,
      status: ReviewStatus.Published,
    };
  }

  const result = await requestJson<Review>(`/api/books/${bookId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  return result.data;
}
