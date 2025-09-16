import Accordion from "@/components/Accordion/Accordion";
import Cards from "@/components/Cards/Cards";
import DialogSection from "@/components/DialogSection/DialogSection";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Cards />
      <Accordion />
      <Info />
      <DialogSection />
      <Form />
    </main>
  );
}
