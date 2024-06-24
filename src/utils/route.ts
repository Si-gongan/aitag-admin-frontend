export const API_ROUTE = {
  GET_DATA: (params: string) => `/data?${params}`,
  POST_DETAIL: (postId: string) => `/post/detail/${postId}`,
};

export const URL_PATH = {
  MAIN: '/',
  POST_DETAIL: (postId: string) => `/post/${postId}`,
};
