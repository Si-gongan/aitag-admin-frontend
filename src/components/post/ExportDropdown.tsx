import { EXPORT_FORMAT } from '@/utils/constants';
import DropdownLayout from '../common/DropdownLayout';
import exportData from '@/utils/exportData';
import { usePostStore } from '@/providers/post-store-provider';

interface ExportDropdownProps {
  onClose: () => void;
}

export default function ExportDropdown({ onClose }: ExportDropdownProps) {
  const { selectedWorks } = usePostStore((state) => ({ selectedWorks: state.selectedWorks }));

  const handleClickExport = (type: string) => {
    exportData(type, selectedWorks);
    onClose();
  };

  return (
    <DropdownLayout onClose={onClose} position="top-44 left-324">
      {EXPORT_FORMAT.map((type) => (
        <span
          key={type}
          className="flex items-center justify-center w-133 h-40 text-16 hover:font-bold"
          onClick={() => handleClickExport(type)}>
          {type}
        </span>
      ))}
    </DropdownLayout>
  );
}
