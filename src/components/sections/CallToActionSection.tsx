
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 bg-hmhy-purple text-white">
      <div className="hmhy-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join us in our mission to create lasting change in the lives of children and families in Western Kenya.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="outline" className="bg-hmhy-orange text-black hover:bg-hmhy-orange-dark">
            <Link to="/contact">Become a Volunteer</Link>
          </Button>
          <Button asChild size="lg" className="bg-hmhy-orange text-black hover:bg-hmhy-orange-dark">
            <Link to="/donor-dashboard">Donate Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
