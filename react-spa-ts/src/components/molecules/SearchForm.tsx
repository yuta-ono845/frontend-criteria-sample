import { FormEvent } from "react";
import { Button } from "../atoms/Button";
import { TextInput } from "../atoms/TextInput";

type SearchFormProps = {
  keyword: string;
  onKeywordChange: (value: string) => void;
  onSubmit: () => void;
};

export function SearchForm({ keyword, onKeywordChange, onSubmit }: SearchFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={keyword}
        placeholder="書籍タイトルで検索"
        onChange={onKeywordChange}
      />
      <Button type="submit">検索</Button>
    </form>
  );
}
