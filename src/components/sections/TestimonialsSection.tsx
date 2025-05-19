
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="hmhy-container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">
          Hear from those whose lives have been touched by our programs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <TestimonialCard
            name="Phanice Mukhungu"
            role="Program Beneficiary"
            image="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747641876/photo_2024-12-19_11-51-59_plqiva.jpg"
            quote="Thanks to the scholarship program, I can now pursue my dream of becoming a teacher and help other children in my community."
          />
          
          <TestimonialCard
            name="Ewa"
            role="Donor from Ireland"
            image="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747641876/photo_2024-12-19_11-51-59_plqiva.jpg"
            quote="Supporting HappyMeHappyYou has been one of the most rewarding experiences. I can see the direct impact of my contributions."
          />
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="btn-outline">
            <Link to="/blog">Read More Stories <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
