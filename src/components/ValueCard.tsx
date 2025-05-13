
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-hmhy-orange-light rounded-full flex items-center justify-center text-hmhy-orange">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center mb-6">{description}</p>
      <div className="text-center">
        <Button asChild className="btn-primary">
          <Link to="/donor-dashboard">Donate Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default ValueCard;
