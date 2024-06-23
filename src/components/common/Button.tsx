interface ButtonProps {
  text: string;
  clicked?: boolean;
  handleClick: () => void;
}

export default function Button({ text, clicked = false, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center rounded-lg w-108 h-40 text-18 ${
        clicked ? 'bg-gray-400 text-white' : 'bg-gray-100'
      }`}>
      {text}
    </button>
  );
}
