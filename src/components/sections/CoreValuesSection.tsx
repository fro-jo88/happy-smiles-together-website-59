
import React from 'react';
import { HandHeart, Lightbulb, Users } from 'lucide-react';
import ValueCard from '@/components/ValueCard';

const CoreValuesSection: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="hmhy-container">
        <h2 className="section-title text-hmhy-orange">Our Core Values</h2>
        <p className="section-subtitle">
          Our commitment to creating lasting positive change is guided by these principles
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ValueCard 
            title="Compassion" 
            description="Driven by empathy, we extend care to the most vulnerable in our community." 
            icon={<HandHeart size={32} />}
          />
          
          <ValueCard 
            title="Empowerment" 
            description="Equipping individuals and families with skills and resources for self-reliance." 
            icon={<Lightbulb size={32} />}
          />
          
          <ValueCard 
            title="Collaboration" 
            description="Partnering with local and global communities to create sustainable impact." 
            icon={<Users size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
