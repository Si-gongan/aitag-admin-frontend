/**의뢰 목록조회 요청 params */
export interface getDataParamsType {
  target: 'comment' | 'ai' | 'inspect';
  // target: string;
  state: 'all' | 'pending' | 'done';
  // state: string;
  search?: string;
  limit?: string;
  page?: string;
  [key: string]: string | undefined;
}

export interface WorkType {
  id: string;
  image: string;
  keywords: string[];
  tone: 'honorific' | 'informal' | 'plain' | 'polite';
  answer?: string;
  before?: string;
  after?: string;
}

export interface DataType {
  id: string;
  writer: string;
  title: string;
  target: 'comment' | 'ai' | 'inspect';
  isComplete: boolean;
  works: WorkType[];
  detail?: string;
  createdAt: string;
  updatedAt: string;
  isPost: boolean;
}

/**의뢰 목록 조회 응답 */
export interface getDataResponseType {
  data: DataType;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: null | number;
  page: number;
  pagingCounter: number;
  prevPage: null | number;
  totalDocs: number;
  totalPages: number;
  isPost: boolean;
}
