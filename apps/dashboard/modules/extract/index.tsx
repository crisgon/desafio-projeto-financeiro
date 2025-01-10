import { ptBR } from "date-fns/locale";
import { Card, Button } from "fiap-financeiro-ds";
import { format } from "date-fns";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { formatCurrency } from "../../../../packages/ui/src/currency-input";
import { transactionsState } from "app/recoil/atoms/transactionsAtom";
import { useRecoilValue } from "recoil";
import { extractState } from "app/recoil/atoms/extractAtom";

export function Extract() {
  const { push } = useRouter();
  const { isLoading, error } = useRecoilValue(transactionsState);
  const extract = useRecoilValue(extractState);

  if (isLoading)
    return (
      <Card type="default" sx={{ width: "282px" }}>
        <Typography variant="h5" sx={{ marginBottom: "16px" }}>
          Extrato
        </Typography>
        Carregando...
      </Card>
    );

  if (error)
    return (
      <Card type="default" sx={{ width: "282px" }}>
        <Typography variant="h5" sx={{ marginBottom: "16px" }}>
          Extrato
        </Typography>
        Erro ao carregar
      </Card>
    );

  return (
    <Card type="default" sx={{ width: "282px" }}>
      <Typography variant="h5" sx={{ marginBottom: "16px" }}>
        Extrato
      </Typography>
      {extract.map((group: any, i: number) => (
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
                <Stack
                  sx={{
                    marginBottom: "10px",
                    borderBottom: "1px solid",
                    borderColor: "primary.dark",
                    paddingY: "8px",
                  }}
                  key={transaction.id}
                >
                  <Stack
                    direction="row"
                    sx={{
                      marginBottom: "8px",
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
                    {isTransfer ? "-R$ " : "R$ "}
                    {formatCurrency(transaction.value)}
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
