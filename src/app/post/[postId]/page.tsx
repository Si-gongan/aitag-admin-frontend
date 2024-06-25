import DelExportButtons from '@/components/post/DelExportButtons';
import PostListSection from '@/components/post/PostListSection';
import PostPagination from '@/components/post/PostPagination';
import PostTitle from '@/components/post/PostTitle';

interface PostIdPageProps {
  params: { postId: string };
}

export default async function PostIdPage({ params }: PostIdPageProps) {
  const { postId } = params;

  return (
    <main className="w-1400 flex flex-col gap-43">
      <PostTitle postId={postId} />
      <DelExportButtons />
      <PostListSection />
      <PostPagination />
    </main>
  );
}
