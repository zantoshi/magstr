import PrimaryCTA from "@/components/callToActions/PrimaryCTA";
import SecondaryCTA from "@/components/callToActions/SecondaryCTA";
import ArticleCardSection from "@/components/cards/ArticleCardSection";
import Footer from "@/components/footer/Footer";
import HeroHeader from "@/components/headers/HeroHeader";

export default async function Home() {
  return (
    <main className="mx-auto">
      <HeroHeader />
      <ArticleCardSection title={"Adoption"} />
      <PrimaryCTA />
      <ArticleCardSection title={"Scene"} accented={true} />
      <SecondaryCTA />
      <ArticleCardSection title={"Education"} />
      <Footer />
    </main>
  );
}
