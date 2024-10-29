export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const createTransactionRequest = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      createdAt: string;
      transactionType: string;
      value: number;
      operationType: string;
    };
  },
) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
};

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
