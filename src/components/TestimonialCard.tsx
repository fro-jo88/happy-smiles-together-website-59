
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  quote,
}) => {
  return (
    <Card className="bg-white shadow-lg border-none">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-20 h-20 border-4 border-hmhy-green mb-4">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <blockquote className="mb-4 text-gray-600 italic">"{quote}"</blockquote>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
