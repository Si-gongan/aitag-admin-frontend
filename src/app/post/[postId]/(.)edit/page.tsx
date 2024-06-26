import ModalLayout from '@/components/common/ModalLayout';
import EditButtons from '@/components/postIdEdit/EditButtons';
import EditContent from '@/components/postIdEdit/EditContent';

export default function PostIdEditPage() {
  return (
    <ModalLayout>
      <EditContent />
      <EditButtons />
    </ModalLayout>
  );
}
