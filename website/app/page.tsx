import Hero from "@/components/Hero";
import Empathy from "@/components/Empathy";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Curriculum from "@/components/Curriculum";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import NewsletterForm from "@/components/NewsletterForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Empathy />
      <Benefits />
      <Testimonials />
      <HowItWorks />
      <Curriculum />
      <Pricing />
      <FAQ />
      <NewsletterForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
