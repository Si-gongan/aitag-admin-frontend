// import { merge } from 'lodash';
// import qs from 'qs';

// type FetcherRequestInit = Omit<RequestInit, 'method'>;
// /**
//  * RequestInit은 fetch 요청을 구성하는 method, headers, body, mode 등을 포함하는 설정 객체의 타입
// Omit은 특정 타입에서 일부 속성을 제거한 세로운 타입을 생성하는 것으로
// 여기서는 RequestInit 중에 'method'만 제거한 새로운 타입을 의미함
// */

// type Config = {
//   baseURL?: string;
//   defaultRequestInit?: FetcherRequestInit;
// };

// const createFetcher = (config?: Config) => {
//   const { baseURL, defaultRequestInit } = config || {};

//   const handleError = (error: unknown) => {
//     if (process.env.NODE_ENV === 'development') {
//       // 개밣 환경에서만 콘솔에 에러를 출력함
//       console.error(error);
//     }
//     return Promise.reject(error);
//   };

//   const request = async <T>(endpoint: stringify, init: RequestInit): Promise<T> => {
//     try {
//       const url = new URL(endpoint, baseURL);
//       const res = await fetch(url, init);

//       if (!res.ok) {
//         throw new Error(`HTTP 에러 발생: ${res.status}`);
//       }

//       return await res.json();
//     } catch (error) {
//       return handleError(error);
//     }
//   };

//   const get = <T>(endpoint: stringify, params?: object): Promise<T> => {
//     const url = new
//   }
// };

export const nexFetch = returnFetch({
  baseUrl: 'https://gongbang.sigongan-ai.shop',
  headers: { 'Content-Type': 'application/json' },
});
