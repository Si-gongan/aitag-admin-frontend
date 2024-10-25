import { TEXTAREA_LIMIT } from '@/utils/constants';

interface TextareaProps {
  name: string;
  label?: string;
  value: string;
  placeholder?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
  name,
  label,
  value,
  placeholder = '',
  maxLength = TEXTAREA_LIMIT.postIdEdit,
  onChange,
}: TextareaProps) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        className="h-300 px-19 py-17 text-16 font-medium border-1 border-gray-500 grow resize-none"
        onChange={onChange}
      />
    </>
  );
}
