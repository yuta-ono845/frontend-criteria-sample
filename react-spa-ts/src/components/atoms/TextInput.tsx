type TextInputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function TextInput({ value, placeholder, onChange }: TextInputProps) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
