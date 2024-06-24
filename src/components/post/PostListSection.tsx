import { WorksType } from '@/services/post/schema';
import PostItem from './PostItem';

interface PostListSectionProps {
  works: WorksType[];
}

export default function PostListSection({ works }: PostListSectionProps) {
  const page = 1;
  const startIndex = (page - 1) * 9 + 1;
  const indexArray = Array.from({ length: 9 }, (_, index) => startIndex + index);

  return (
    <section className="flex flex-wrap gap-x-46 gap-y-44">
      {indexArray.map((index) => works[index] && <PostItem key={works[index].id} work={works[index]} />)}
      {/* {works.map((work, index) => (

        <PostItem key={work.id} work={work} />
      ))} */}
    </section>
  );
}
