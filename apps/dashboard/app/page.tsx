"use client";

import useSWR from "swr";
import styles from "./page.module.css";
import { Card } from "@repo/ui/card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, isLoading, error } = useSWR("/api/transacao", fetcher);

  console.log({ data, isLoading, error });

  return (
    <main className={styles.main}>
      <Card type="default" sx={{ width: "180px" }}>
        Menu
      </Card>
      <div className={styles.cardsBox}>
        <Card type="primary" sx={{ height: "420px" }}>
          Boas-vindas
        </Card>
        <Card type="secondary" sx={{ height: "420px" }}>
          Nova transação
        </Card>
      </div>
      <Card type="default" sx={{ width: "282px" }}>
        Extrato
      </Card>
    </main>
  );
}
