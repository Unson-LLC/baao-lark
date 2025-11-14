import HeroSection from "@/components/home/HeroSection";
import FreeLiveSection from "@/components/home/FreeLiveSection";
import SampleVideosVoices from "@/components/home/SampleVideosVoices";
import PathToMastery from "@/components/home/PathToMastery";
import ProgramSnapshot from "@/components/home/ProgramSnapshot";
import CasesMethodology from "@/components/home/CasesMethodology";
import CommunityFellows from "@/components/home/CommunityFellows";
import EventsUpdates from "@/components/home/EventsUpdates";
import FAQPreview from "@/components/home/FAQPreview";
import CTABand from "@/components/home/CTABand";

export default function Home() {
  return (
    <div className="bg-[#F9F6F0]">
      <HeroSection />
      <FreeLiveSection />
      <SampleVideosVoices />
      <PathToMastery />
      <ProgramSnapshot />
      <CasesMethodology />
      <CommunityFellows />
      <EventsUpdates />
      <FAQPreview />
      <CTABand />
    </div>
  );
}
