import ListSection from '@/components/main/ListSection';
import SortButtons from '@/components/main/SortButtons';
import { getData } from '@/services/main';

export default async function Home() {
  const data = await getData({ target: 'ai', state: 'all' });

  return (
    <div className="w-1384 flex flex-col gap-74">
      <header className="text-36 font-semibold text-black">A;tag Admin Page</header>
      <main className="flex flex-col gap-61">
        <SortButtons />
        <ListSection data={data.data} />
      </main>
    </div>
  );
}
