export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const updateSaldo = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      operationValue: number;
      operationType: string;
    };
  },
) => {
  await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
  });
};
