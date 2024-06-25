import DelExportButtons from '@/components/post/DelExportButtons';
import PostListSection from '@/components/post/PostListSection';
import PostPagination from '@/components/post/PostPagination';
import PostTitle from '@/components/post/PostTitle';

interface InspectIdPageProps {
  params: { inspectId: string };
}

export default function InspectIdPage({ params }: InspectIdPageProps) {
  const { inspectId } = params;

  return (
    <main className="w-1400 flex flex-col gap-43">
      <PostTitle postId={inspectId} />
      <DelExportButtons />
      <PostListSection />
      <PostPagination />
    </main>
  );
}
