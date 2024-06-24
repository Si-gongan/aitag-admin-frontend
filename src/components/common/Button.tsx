// interface ButtonProps {
//   text: string;
//   clicked?: boolean;
//   handleClick: () => void;
// }

import Image from 'next/image';
import CheckBox from './CheckBox';

// export default function Button({ text, clicked = false, handleClick }: ButtonProps) {
//   return (
//     <button
//       onClick={handleClick}
//       className={`flex items-center justify-center rounded-lg w-108 h-40 text-18 ${
//         clicked ? 'bg-gray-400 text-white' : 'bg-gray-100'
//       }`}>
//       {text}
//     </button>
//   );
// }

interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  clicked?: boolean;
  selectable?: boolean;
  handleClick: () => void;
}

export default function Button({
  text,
  size = 'medium',
  clicked = false,
  selectable = false,
  handleClick,
}: ButtonProps) {
  const sizeClassName = `btn-${size}`;

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-10 rounded-10 ${
        size === 'small' ? 'text-15 bg-gray-200' : 'text-18 bg-gray-100'
      } ${sizeClassName} ${(selectable || clicked) && 'bg-gray-400 text-white'}`}>
      {selectable && <CheckBox clicked={selectable && clicked} />}
      {text}
    </button>
  );
}
