import ListSection from '@/components/main/ListSection';
import SortButtons from '@/components/main/SortButtons';

export default function Home() {
  return (
    <div className="w-1384 flex flex-col gap-74">
      <header className="text-36 font-semibold text-black">A;tag Admin Page</header>
      <main className="flex flex-col gap-61">
        <SortButtons />
        <ListSection />
      </main>
    </div>
  );
}
