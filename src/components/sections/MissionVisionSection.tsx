
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="section-padding bg-hmhy-blue-light">
      <div className="hmhy-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-hmhy-orange">Our Mission</h3>
              <p className="text-gray-600">
                To promote education, health, and sustainability through community-based programs
                that empower children and families to break the cycle of poverty.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-hmhy-orange">Our Vision</h3>
              <p className="text-gray-600">
                Thriving families leading prosperous communities where every child has the opportunity
                to reach their full potential.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-hmhy-orange">Our Values</h3>
              <p className="text-gray-600">
                Care and empathy for vulnerable children, accountability in all our actions,
                and sustainable solutions that respect local culture and environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
