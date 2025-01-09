import http from "app/http";

export const getAccountsRequest = async ({
  url,
  headers,
}: {
  url: string;
  headers: any;
}) => {
  const response = await http({
    method: "get",
    url,
    headers,
  });

  return response;
};
