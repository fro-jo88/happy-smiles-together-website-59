
import React, { useEffect, useState } from 'react';

interface YouTubeBackgroundProps {
  videoId: string;
  children: React.ReactNode;
}

const YouTubeBackground: React.FC<YouTubeBackgroundProps> = ({ videoId, children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    window.onYouTubeIframeAPIReady = () => {
      setIsLoaded(true);
    };
    
    // Cleanup
    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);

  return (
    <div className="youtube-background">
      <div className="youtube-overlay"></div>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&disablekb=1&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        aria-hidden="true"
      ></iframe>
      <div className="hero-content w-full h-full flex flex-col items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
};

export default YouTubeBackground;
