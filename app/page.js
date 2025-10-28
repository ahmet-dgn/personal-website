import HeroArea from "@/components/HeroArea";

import JobExperince from "@/components/JobExperince";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ShopifyExperince from "@/components/ShopifyExperince";
export default function Home() {
  return (
    <>
      <HeroArea />
      <JobExperince />
        <ShopifyExperince/>
      <Projects />
      <Footer />
    </>
  );
}
