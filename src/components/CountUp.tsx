
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = ''
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const countTimerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      
      const animateCount = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }
        
        const progress = timestamp - startTimeRef.current;
        const percentage = Math.min(progress / duration, 1);
        const currentCount = Math.floor(end * percentage);
        
        setCount(currentCount);
        
        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end); // Ensure we end at exactly the specified number
        }
      };
      
      requestAnimationFrame(animateCount);
    }
    
    return () => {
      if (countTimerRef.current) {
        clearTimeout(countTimerRef.current);
      }
    };
  }, [inView, end, duration, hasStarted]);

  return (
    <div ref={ref} className="animate-count-up opacity-0">
      <span className="text-3xl md:text-4xl font-bold text-hmhy-green">
        {prefix}{count}{suffix}
      </span>
    </div>
  );
};

export default CountUp;
