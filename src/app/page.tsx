import styles from "./page.module.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import TableInfo from "./components/table";
import Paralax from "./components/paralax";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Paralax image={"paralaxImageBridge"} />
      <TableInfo />
    </main>
  );
}
