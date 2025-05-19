
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import YouTubeBackground from '@/components/YoutubeBackground';

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen">
      <YouTubeBackground videoId="um54YAy6V9Y">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            We Believe In Sharing Smiles
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Small acts of kindness can make a big difference…
          </p>
          <Button asChild size="lg" className="bg-hmhy-orange hover:bg-hmhy-orange-dark animate-fade-in">
            <Link to="/donor-dashboard">Donate Now</Link>
          </Button>
        </div>
      </YouTubeBackground>
    </section>
  );
};

export default HeroSection;
