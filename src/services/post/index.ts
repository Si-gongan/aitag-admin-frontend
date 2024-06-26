import { fetcher } from '@/lib/fetcher';
import { API_ROUTE } from '@/utils/route';

/**ai, comment 의뢰 정보조회 요청 */
export async function getPostDetail(postId: string) {
  const requesrUrl = `${API_ROUTE.POST_DETAIL(postId)}`;

  const response = await fetcher(requesrUrl, 'GET');
  return response.result.post;
}

/**ai, comment 의뢰 정보 중 work 삭제 요청 */
export async function deleteWork(postId: string, workIds: string[]) {
  const requesrUrl = `${API_ROUTE.POST_DETAIL(postId)}`;

  const option = {
    body: JSON.stringify({ workIds }),
  };

  const response = await fetcher(requesrUrl, 'POST', option);
  return response.result.post;
}

/**inspect 의뢰 정보조회 요청 */
export async function getInspectDetail(inspectId: string) {
  const requesrUrl = `${API_ROUTE.INSPCET_DETAIL(inspectId)}`;

  const response = await fetcher(requesrUrl, 'GET');
  return response.result.inspect;
}

/**comment의 work.answer 수정 요청 */
export async function patchComment(postId: string, workId: string, answer: string) {
  const requesrUrl = `${API_ROUTE.POST_DETAIL(postId)}`;

  const option = {
    body: JSON.stringify({ workId, answer }),
  };

  const response = await fetcher(requesrUrl, 'PATCH', option);
  return response.result.post;
}

/**inspect의 work.after 수정 요청 */
export async function patchInspect(inspectId: string, workId: string, answer: string) {
  const requesrUrl = `${API_ROUTE.INSPCET_DETAIL(inspectId)}`;

  const option = {
    body: JSON.stringify({ workId, answer }),
  };

  const response = await fetcher(requesrUrl, 'PATCH', option);
  return response.result.inspect;
}
