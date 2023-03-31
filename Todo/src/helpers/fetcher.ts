//fetcher of swr hook
const fetcher = async (url: string) => {
  const response = await fetch(url);
  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }
  throw Error;
};

export { fetcher };
