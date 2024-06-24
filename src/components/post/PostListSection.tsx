import { WorksType } from '@/services/post/schema';
import PostItem from './PostItem';

interface PostListSectionProps {
  works: WorksType[];
}

export default function PostListSection({ works }: PostListSectionProps) {
  return (
    <section className="flex flex-wrap gap-x-46 gap-y-44">
      {works.map((work) => (
        <PostItem key={work.id} work={work} />
      ))}
    </section>
  );
}
