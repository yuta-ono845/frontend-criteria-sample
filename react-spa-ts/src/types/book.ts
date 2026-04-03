export enum ReviewStatus {
  Draft = "draft",
  Published = "published",
}

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  tags: string[];
  averageRating: number;
}

export interface Review {
  id: number;
  bookId: number;
  rating: number;
  comment: string;
  status: ReviewStatus;
}

export interface ReviewInput {
  rating: number;
  comment: string;
}

export type ApiResponse<T> = {
  data: T;
  requestedAt: string;
};
