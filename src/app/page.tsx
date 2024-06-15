import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import TableInfo from "./components/table";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TableInfo />
    </main>
  );
}
