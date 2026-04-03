import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookListPage } from "./pages/BookListPage";
import { BookDetailPage } from "./pages/BookDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookListPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
