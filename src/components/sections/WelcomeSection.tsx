
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WelcomeSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="hmhy-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747641072/06c877_bdc6a4c2d1b44c04b1f9a31fe1ecc497mv2-265x300_swvrzl.jpg" 
              alt="Children smiling" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hmhy-orange">
              Our Main Goal is to Help Poor People!
            </h2>
            <p className="text-gray-600 mb-6">
              At HappyMeHappyYou, we are committed to improving the lives of children, women, and families
              through sustainable support and global volunteerism. Our programs focus on education,
              clean water, nutrition, and family empowerment to break the cycle of poverty.
            </p>
            <p className="text-gray-600 mb-8">
              Together with our partners and donors, we're creating lasting change in Western Kenya,
              one smile at a time.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
