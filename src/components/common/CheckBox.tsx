import Image from 'next/image';

interface CheckBoxProps {
  clicked: boolean;
  onClick?: () => void;
}

export default function CheckBox({ clicked, onClick }: CheckBoxProps) {
  return (
    <div
      className="flex items-center justify-center w-23 h-23 bg-white border-1 border-gray-400 rounded"
      onClick={onClick}>
      {clicked && <Image src="/images/check.svg" alt="체크 아이콘" width={14} height={14} />}
    </div>
  );
}
