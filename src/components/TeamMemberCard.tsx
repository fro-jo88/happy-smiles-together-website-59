
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
  bio?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  image,
  bio,
}) => {
  return (
    <Card className="bg-white shadow-lg border-none overflow-hidden transition-all hover:shadow-xl">
      <CardContent className="p-0">
        <div className="aspect-square relative">
          <Avatar className="w-full h-full rounded-none">
            <AvatarImage src={image} alt={name} className="object-cover" />
            <AvatarFallback className="rounded-none w-full h-full">{name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-hmhy-green font-medium">{title}</p>
          {bio && <p className="text-sm text-gray-600 mt-2">{bio}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
