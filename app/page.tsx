import Accordion from "@/components/Accordion/Accordion";
import Cards from "@/components/Cards/Cards";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Cards />
      <Accordion />
    </main>
  );
}
