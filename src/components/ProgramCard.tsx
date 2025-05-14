
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-hmhy-orange-light rounded-full flex items-center justify-center text-[#024E64]">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center mb-6">{description}</p>
        <div className="text-center">
          <Button asChild className="bg-[#FF3F00] text-white hover:bg-[#E53900]">
            <Link to={link}>Donate Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
