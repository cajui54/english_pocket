import styles from "./page.module.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import TableInfo from "./components/table";
import Paralax from "./components/paralax";
import ArticleAbout from "./components/article";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Paralax image={"paralaxImageBridge"} />
      <TableInfo />
      <Paralax image={"paralaxImageTimeSquare"} />
      <ArticleAbout />
      <Footer />
    </main>
  );
}
