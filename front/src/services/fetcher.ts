export const fetcher = async <T>(
  url: string,
  method: string,
  body?: BodyInit,
  tags?: string[],
  contentType?: string,
): Promise<T> => {
  const requestHeaders: HeadersInit = {};

  if (contentType) {
    requestHeaders['Content-Type'] = contentType;
  }

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    method,
    body,
    cache: tags ? undefined : 'no-cache',
    next: tags ? { tags, revalidate: 3600 } : undefined,
    headers: requestHeaders,
  });

  if (!response.ok) {
    const error = await response.text();
    console.log(error);
    return null as T;
  }

  const responseContentType = response.headers.get('Content-Type');

  if (responseContentType?.includes('application/json')) {
    const data = await response.json();
    return data as T;
  }

  const data = await response.text();
  return data as T;
};

export const authenticatedFetcher = async <T>(
  url: string,
  method: string,
  token?: string,
  body?: BodyInit,
  contentType?: string,
): Promise<T> => {
  const requestHeaders: HeadersInit = {};
  if (token) {
    requestHeaders.Authorization = `Bearer ${token}`;
  }
  if (contentType) {
    requestHeaders['Content-Type'] = contentType;
  }

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    headers: requestHeaders,
    method,
    body,
  });

  const responseContentType = response.headers.get('Content-Type');

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return responseContentType?.includes('application/json')
    ? await response.json()
    : await response.text();
};
