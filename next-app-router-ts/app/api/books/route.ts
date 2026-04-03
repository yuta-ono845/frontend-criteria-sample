import { NextResponse } from "next/server";
import { getBooks } from "../../../lib/book-data";

export async function GET() {
  const books = await getBooks();

  return NextResponse.json({
    data: books,
    requestedAt: new Date().toISOString(),
  });
}
