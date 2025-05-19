
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import CoreValuesSection from '@/components/sections/CoreValuesSection';
import WelcomeSection from '@/components/sections/WelcomeSection';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import ImpactSection from '@/components/sections/ImpactSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoreValuesSection />
      <WelcomeSection />
      <MissionVisionSection />
      <ImpactSection />
      <ProgramsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default Index;
