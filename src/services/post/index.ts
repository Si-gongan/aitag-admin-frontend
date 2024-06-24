import { fetcher } from '@/lib/fetcher';
import { API_ROUTE } from '@/utils/route';

/**의뢰 정보조회 요청 */
export async function getPostDetail(postId: string) {
  const requesrUrl = `${API_ROUTE.POST_DETAIL(postId)}`;

  const response = await fetcher(requesrUrl, 'GET');
  return response.result.post;
}
