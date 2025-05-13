
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TeamMemberCard from '@/components/TeamMemberCard';

const Team = () => {
  // Team member data
  const teamMembers = [
    {
      name: "Eva Kitui",
      title: "Co-Founder",
      image: "/placeholder.svg",
      bio: "Eva has dedicated her life to improving educational opportunities for children in Western Kenya."
    },
    {
      name: "Elvis Ingadi",
      title: "Founder & Programs Manager",
      image: "/placeholder.svg",
      bio: "Elvis founded HappyMeHappyYou after overcoming personal tragedy and seeing the need for community support."
    },
    {
      name: "Jennifer Agamu",
      title: "Community Parents Representative",
      image: "/placeholder.svg",
      bio: "Jennifer works closely with families in the community to ensure their needs are represented."
    },
    {
      name: "Fanis Khatenje",
      title: "ECD Teacher",
      image: "/placeholder.svg",
      bio: "Fanis brings over 10 years of experience in early childhood development to our programs."
    },
    {
      name: "Jarred Wafula",
      title: "Social Worker",
      image: "/placeholder.svg",
      bio: "Jarred provides crucial support to children and families dealing with trauma and difficult circumstances."
    },
    {
      name: "Horridah Angila",
      title: "Chef / Cook",
      image: "/placeholder.svg",
      bio: "Horridah ensures our feeding program provides nutritious and delicious meals to all children."
    },
    {
      name: "Dorcas Toekesi Karakacha",
      title: "ECD Teacher",
      image: "/placeholder.svg",
      bio: "Dorcas specializes in creating engaging learning environments for our youngest participants."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hmhy-blue-light py-16 md:py-24">
        <div className="hmhy-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-hmhy-blue-dark mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              The dedicated individuals who make our mission possible through their passion,
              expertise, and commitment to serving our community.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="section-padding">
        <div className="hmhy-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  bio={member.bio}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-lg mb-8">
                Interested in learning more about our founder's inspiring journey?
              </p>
              <Button asChild className="btn-primary">
                <Link to="/elvis-story">Read Elvis' Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding bg-hmhy-green-light">
        <div className="hmhy-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg mb-8">
              We're always looking for passionate individuals to join our mission, whether as staff, 
              volunteers, or board members. If you share our values and want to make a difference,
              we'd love to hear from you.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/contact">Contact Us About Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
