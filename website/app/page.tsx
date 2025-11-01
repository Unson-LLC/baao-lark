import HeroSection from "@/components/home/HeroSection";
import FreeLiveSection from "@/components/home/FreeLiveSection";
import SampleVideosVoices from "@/components/home/SampleVideosVoices";
import PathToMastery from "@/components/home/PathToMastery";
import ProgramSnapshot from "@/components/home/ProgramSnapshot";
import FieldWorksOverview from "@/components/home/FieldWorksOverview";
import CommunityFellows from "@/components/home/CommunityFellows";
import CasesHighlights from "@/components/home/CasesHighlights";
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
      <FieldWorksOverview />
      <CommunityFellows />
      <CasesHighlights />
      <EventsUpdates />
      <FAQPreview />
      <CTABand />
    </div>
  );
}
