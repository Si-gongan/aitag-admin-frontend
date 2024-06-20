import { SORT_BUTTONS } from '@/utils/constants';

export default function SortButtons() {
  return (
    <div className="flex items-center gap-40">
      {SORT_BUTTONS.map((sort) => (
        <button
          key={sort.text}
          className="flex items-center justify-center rounded-lg w-108 h-40 bg-gray-100 text-black text-18">
          {sort.text}
        </button>
      ))}
    </div>
  );
}
