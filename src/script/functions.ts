export function to<T>(
  promise: Promise<T>,
  errInfo?: string | object,
): Promise<(T | undefined)[] | [any, undefined]> {
  return promise
    .then((res) => [undefined, res])
    .catch((err) => {
      if (errInfo) {
        Object.assign(err, errInfo);
      }
      return [err, undefined];
    });
}
export const getText = async (PATH_URL: string, headers: any) => {
  const res = await fetch(PATH_URL, {
    method: "GET",
    headers,
  });

  return await res.text();
};

export const get = async (PATH_URL: string, headers: any) => {
  const res = await fetch(PATH_URL, {
    method: "GET",
    headers,
  });

  return await res.json();
};

export const post = async (PATH_URL: string, body: any, headers: any) => {
  const res = await fetch(PATH_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  return await res.json();
};
