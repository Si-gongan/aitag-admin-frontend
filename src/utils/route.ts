export const API_ROUTE = {
  GET_DATA: (params: string) => `admin/data?${params}`,
  POST_DETAIL: (postId: string) => `admin/post/detail/${postId}`,
  INSPCET_DETAIL: (inspectId: string) => `/inspect/detail/${inspectId}`,
};

export const URL_PATH = {
  MAIN: '/',
  POST_DETAIL: (postId: string) => `/post/${postId}`,
  INSPECT_DETAIL: (inspectId: string) => `/inspect/${inspectId}`,
};
