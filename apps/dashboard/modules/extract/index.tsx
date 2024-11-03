import { ptBR } from "date-fns/locale";
import { Card } from "@repo/ui/card";
import useSWR from "swr";
import { format } from "date-fns";
import { Box, Stack, Typography } from "@mui/material";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Extract() {
  const { push } = useRouter();
  const { data, isLoading, error } = useSWR("/api/extrato", fetcher);

  if (isLoading) return <Card type="default">Carregando...</Card>;
  if (error) return <Card type="default">Erro ao carregar</Card>;

  return (
    <Card type="default" sx={{ width: "282px" }}>
      <Typography variant="h5" sx={{ marginBottom: "16px" }}>
        Extrato
      </Typography>
      {data.map((group: any, i: number) => (
        <Box
          key={group.monthNumber + group.year + i}
          sx={{
            marginBottom: "16px",
          }}
        >
          <Typography
            color="primary.dark"
            fontWeight={600}
            textTransform="capitalize"
          >
            {ptBR.localize.month(group.monthNumber)}
          </Typography>
          <>
            {group.transactions.map((transaction: any) => {
              const isTransfer = transaction.operationType === "transferencia";

              return (
                <Stack sx={{ marginBottom: "10px" }} key={transaction.id}>
                  <Stack
                    direction="row"
                    sx={{
                      borderBottom: "1px solid",
                      borderColor: "primary.dark",
                      marginBottom: "8px",
                      paddingY: "8px",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography fontSize={13} textTransform="capitalize">
                      {transaction.operationType}
                    </Typography>
                    <Typography fontSize={13}>
                      {format(new Date(transaction.createdAt), "dd/MM/yyyy")}
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "13px",
                      color: isTransfer ? "error.main" : "success.main",
                    }}
                  >
                    {isTransfer ? "-" : ""}
                    {"R$ "}
                    {new Intl.NumberFormat("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(transaction.value / 100)}
                  </Typography>
                </Stack>
              );
            })}
          </>
        </Box>
      ))}

      <Button
        label="Ver mais"
        variant="outlined"
        color="tertiary"
        onClick={() => push("/transactions")}
      />
    </Card>
  );
}
