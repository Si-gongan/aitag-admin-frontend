import { API_ROUTE } from '@/utils/route';
import { getDataParamsType } from './schema';
import { fetcher } from '@/lib/fetcher';
import { MAIN_DATA_LIMIT } from '@/utils/constants';

/**의뢰 목록조회 요청 */
export async function getData(params: getDataParamsType) {
  const requestParams = new URLSearchParams();

  requestParams.set('target', params.target);
  requestParams.set('state', params.state);
  requestParams.set('limit', params.limit || MAIN_DATA_LIMIT);
  requestParams.set('page', params.page || '1');

  if (params.search) requestParams.set('search', params.search);

  const requestUrl = `${API_ROUTE.GET_DATA(requestParams.toString())}`;

  const response = await fetcher(requestUrl, 'GET');
  return response.result;
}
