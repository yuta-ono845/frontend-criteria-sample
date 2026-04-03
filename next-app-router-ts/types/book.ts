export interface BookSummary {
  id: number;
  title: string;
  author: string;
  summary: string;
}

export interface BookDetail extends BookSummary {
  body: string;
  tags: string[];
}
