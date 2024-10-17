"use client";

import WelcomeCard from "./components/WelcomeCard";
import styles from "./page.module.css";

import { Card } from "@repo/ui/card";

export default function Home() {
  return (
    <>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>
        <Card type="default" sx={{ width: "180px" }}>
          Menu
        </Card>
        <div className={styles.cardsBox}>
          <WelcomeCard />
          <Card type="secondary" sx={{ height: "420px" }}>
            Nova transação
          </Card>
        </div>
        <Card type="default" sx={{ width: "282px" }}>
          Extrato
        </Card>
      </main>
    </>
  );
}
