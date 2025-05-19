
import React from 'react';
import { BookOpen, Utensils, GraduationCap, Droplets, Heart, Lightbulb, Scissors, Users2 } from 'lucide-react';
import ProgramCard from '@/components/ProgramCard';

const ProgramsSection: React.FC = () => {
  // Program cards data
  const programs = [
    {
      title: "Feeding Program",
      description: "Providing daily nutritious meals to children in need.",
      icon: <Utensils size={32} />,
      link: "/programs#feeding"
    },
    {
      title: "Scholarship Program",
      description: "Helping children access education through scholarships.",
      icon: <GraduationCap size={32} />,
      link: "/programs#scholarship"
    },
    {
      title: "Adopt/Mentor a Child",
      description: "Make a difference in a child's life through mentorship.",
      icon: <Heart size={32} />,
      link: "/programs#adopt-mentor"
    },
    {
      title: "Water Filters Program",
      description: "Providing access to clean drinking water for families.",
      icon: <Droplets size={32} />,
      link: "/programs#water-filters"
    },
    {
      title: "Adopt a Family",
      description: "Support entire families with resources they need.",
      icon: <Users2 size={32} />,
      link: "/programs#adopt-family"
    },
    {
      title: "Farming & Income Training",
      description: "Teaching sustainable farming and income generation skills.",
      icon: <Lightbulb size={32} />,
      link: "/programs#farming-income"
    },
    {
      title: "Sewing Classes",
      description: "Empowering women with skills for economic independence.",
      icon: <Scissors size={32} />,
      link: "/programs#sewing"
    },
    {
      title: "Family Planning",
      description: "Education and resources for family planning and health.",
      icon: <Users2 size={32} />,
      link: "/programs#family-planning"
    },
    {
      title: "Nutrition Education",
      description: "Teaching families about proper nutrition for healthy living.",
      icon: <BookOpen size={32} />,
      link: "/programs#nutrition"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="hmhy-container">
        <h2 className="section-title">Our Programs & Causes</h2>
        <p className="section-subtitle">
          Explore the many ways we're working to create lasting change in our community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
              link={program.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
