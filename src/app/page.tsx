import { Hero } from "@/components/Hero";
import { ProblemFirst } from "@/components/ProblemFirst";
import { Services } from "@/components/Services";
import { CustomerLogos } from "@/components/CustomerLogos";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <CaseStudies />
        <Services />
        <ProblemFirst />
        <CustomerLogos />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
