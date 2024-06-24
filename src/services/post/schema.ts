export type PostTargetType = 'ai' | 'comment';

export interface WorksType {
  id: string;
  image: string;
  language: string;
  keywords: string[];
  tone: string;
  answer?: string;
}

/**의뢰 정보 조회 응답 */
export interface getPostDetailType {
  id: string;
  writer: string;
  title: string;
  target: PostTargetType;
  isComplete: boolean;
  works: WorksType[];
  detail?: string;
  createdAt: string;
  updatedAt: string;
}
