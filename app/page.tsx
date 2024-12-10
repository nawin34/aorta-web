import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Screenshots } from "@/components/sections/Screenshots";
import { ExcitementRating } from "@/components/sections/ExcitementRating";
import { StoreButtons } from "@/components/sections/StoreButtons";
import { Pricing } from "@/components/sections/Pricing";
import { Team } from "@/components/sections/Team";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <Features />
        <Screenshots />
        <Pricing />
        <Team />
       
        <ExcitementRating />
      </main>
      <Footer />
    </>
  );
}