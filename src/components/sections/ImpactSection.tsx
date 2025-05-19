
import React from 'react';
import CountUp from '@/components/CountUp';

const ImpactSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="hmhy-container">
        <h2 className="section-title">Our Impact</h2>
        <p className="section-subtitle">
          Together with our donors and partners, we've made a significant difference
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12 text-center">
          <div className="flex flex-col items-center">
            <CountUp end={100} suffix="+" />
            <p className="mt-2 text-gray-600">Children Supported</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CountUp end={10} suffix="+" />
            <p className="mt-2 text-gray-600">Years of Care</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CountUp end={5000} suffix="+" />
            <p className="mt-2 text-gray-600">Children & Youths</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CountUp end={1000} suffix="+" />
            <p className="mt-2 text-gray-600">Global Volunteers</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CountUp end={200} suffix="+" />
            <p className="mt-2 text-gray-600">Education Programs</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CountUp end={100} suffix="+" />
            <p className="mt-2 text-gray-600">Families Helped</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
