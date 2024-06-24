import Pagination from '@/components/common/Pagination';
import DelExportButtons from '@/components/post/DelExportButtons';
import PostListSection from '@/components/post/PostListSection';
import PostTitle from '@/components/post/PostTitle';
import { getPostDetail } from '@/services/post';

interface PostIdPageProps {
  params: { postId: string };
}

export default async function PostIdPage({ params }: PostIdPageProps) {
  const { postId } = params;
  const initPostDetail = await getPostDetail(postId);
  const { title, detail = null, works } = initPostDetail;
  const totalPages = Math.floor(works.length / 9) + 1;

  return (
    <main className="w-1400 flex flex-col gap-43">
      <PostTitle title={title} detail={detail} />
      <DelExportButtons />
      <PostListSection works={works} />
      <Pagination initTotalPages={totalPages} />
    </main>
  );
}
