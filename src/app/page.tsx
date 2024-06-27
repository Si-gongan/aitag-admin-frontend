import ListSection from '@/components/main/ListSection';
import MainPagination from '@/components/main/MainPagination';
import SortButtons from '@/components/main/SortButtons';
import { getData } from '@/services/main';
import { STATE_BUTTONS, TARGET_BUTTONS } from '@/utils/constants';
import './globals.css';

export default async function MainPage() {
  const response = await getData({ target: 'all', state: 'all' });
  // SEO

  return (
    <main className="w-1400 flex flex-col gap-60 mb-24">
      <section className="flex items-center gap-60 mb-10">
        <SortButtons type="state" buttons={STATE_BUTTONS} />
        <hr className="h-38 border-1" />
        <SortButtons type="target" buttons={TARGET_BUTTONS} />
      </section>
      <ListSection />
      <MainPagination />
    </main>
  );
}
