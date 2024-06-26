import ModalLayout from '@/components/common/ModalLayout';
import EditButtons from '@/components/postIdEdit/EditButtons';
import EditContent from '@/components/postIdEdit/EditContent';

interface WorkEditModalProps {
  onClose: () => void;
}

export default function WorkEditModal({ onClose }: WorkEditModalProps) {
  return (
    <ModalLayout onClose={onClose}>
      <EditContent />
      <EditButtons onClose={onClose} />
    </ModalLayout>
  );
}
