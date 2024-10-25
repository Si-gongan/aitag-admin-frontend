export async function fetcher(endPoint: string, method: string, options?: any) {
  const requestUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endPoint}`;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  const defaultHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const requestOptions = {
    method,
    headers: {
      ...defaultHeaders,
      ...options?.headers,
    },
    // cache: 'no-store', // build 에러 발생으로 주석처리
    ...options,
  };

  try {
    const response = await fetch(requestUrl, requestOptions);
    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error(`fetcher 에러 응답: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('HTTP 요청 에러', error);
    throw error;
  }
}
