import React from 'react';
import { Link } from 'react-router-dom';
import { HandHeart, Users, Award, ArrowRight, BookOpen, Utensils, GraduationCap, 
  Droplets, Heart, Lightbulb, Scissors, HomeIcon, Users2, 
  UserPlus, School, Building, Bike, AlertTriangle, HelpingHand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TestimonialCard from '@/components/TestimonialCard';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, icon, id }) => {
  return (
    <Card className="h-full" id={id}>
      <CardContent className="p-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-hmhy-orange-light rounded-full flex items-center justify-center text-[#024E64]">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
        <p className="text-gray-600 text-center mb-6">{description}</p>
        <div className="text-center">
          <Button asChild>
            <Link to="/contact">Get Involved</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Programs = () => {
  // Program data
  const programs = [
    {
      id: "volunteer",
      title: "Volunteer",
      description: "Join our volunteer program and help create positive change in our community. Together, we can spread joy, empower lives, and build a brighter future. Be the reason someone smiles today—volunteer with us! 🌟",
      icon: <HandHeart size={32} />
    },
    {
      id: "mentor-child",
      title: "Mentor a Child",
      description: "Share your skills, guidance, and support to inspire a brighter future for a child in need. Together, we can nurture potential, build confidence, and create lasting impact. Join us and make a difference today",
      icon: <UserPlus size={32} />
    },
    {
      id: "adopt-family",
      title: "Adopt a Family",
      description: "Together, we can provide nutritious meals to families in need, fostering hope and resilience in our communities. Your partnership, whether through donations or sponsorship, directly impacts lives, ensuring no family goes to bed hungry.",
      icon: <Users2 size={32} />
    },
    {
      id: "community-works",
      title: "Community Works",
      description: "Together lets empower communities through sustainable initiatives, uplifting lives and fostering growth. Join us in making a difference, one project at a time. Together, we build stronger, happier communities!",
      icon: <Building size={32} />
    },
    {
      id: "water-sanitation",
      title: "Water and Sanitation",
      description: "At Happy Me, Happy You Organization, we believe in creating clean, hygienic, and welcoming environments for everyone. As part of our commitment to fostering health and happiness.",
      icon: <Droplets size={32} />
    },
    {
      id: "youth-development",
      title: "Youth Development",
      description: "Our mission is to nurture a generation of young leaders equipped with the skills, knowledge, and confidence to excel in personal and professional spheres.",
      icon: <Bike size={32} />
    },
    {
      id: "emergency-relief",
      title: "Emergency Relief",
      description: "Our Emergency Relief Program is dedicated to offering timely support to communities affected by natural disasters, conflicts, and other emergencies.",
      icon: <AlertTriangle size={32} />
    },
    {
      id: "food-security",
      title: "Food Security",
      description: "Happy Me Happy You is committed to fostering food security in our communities, ensuring that everyone has access to sufficient, safe, and nutritious food to lead a healthy and active life.",
      icon: <Utensils size={32} />
    },
    {
      id: "sewing",
      title: "Sewing",
      description: "Empower lives by supporting skills training in sewing, fostering creativity, and enabling self-reliance. Together, we can stitch brighter futures and build stronger communities.",
      icon: <Scissors size={32} />
    },
    {
      id: "mosquito-nets",
      title: "Mosquito Nets",
      description: "Partner with Happy Me Happy You on our Mosquito Nets Program to protect vulnerable communities from malaria. Together, we can provide life-saving nets, promote health, and create a brighter future.",
      icon: <HelpingHand size={32} />
    },
    {
      id: "counselling",
      title: "Counselling",
      description: "Lets create a supportive environment, foster resilience, and help individuals lead healthier, happier lives. Let's make a difference—one conversation at a time.",
      icon: <Heart size={32} />
    },
    {
      id: "scholarships",
      title: "Scholarships",
      description: "Together, we can empower deserving students, unlocking their potential and creating brighter futures. Join us in making education accessible and impactful, one scholarship at a time.",
      icon: <GraduationCap size={32} />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-16 md:py-24 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22')",
          backgroundSize: "cover"
        }}
      >
        <div className="hmhy-container">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Be Part of Us in Sharing Smiles
            </h1>
            <p className="text-xl mb-8">
              Partner with Us
            </p>
            <h2 className="text-3xl font-semibold mb-6">
              Our Programs
            </h2>
          </div>
        </div>
      </section>
      
      {/* Programs Content */}
      <div className="section-padding">
        <div className="hmhy-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                id={program.id}
                title={program.title}
                description={program.description}
                icon={program.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Client Feedback Section */}
      <section className="py-16 bg-gray-50">
        <div className="hmhy-container">
          <h2 className="section-title text-hmhy-orange">Client Feedback</h2>
          <p className="section-subtitle mb-10">
            What people are saying about our programs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img 
                src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747641876/photo_2024-12-19_11-51-59_plqiva.jpg" 
                alt="Client feedback" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <div>
              <TestimonialCard
                name="Mary Wambui"
                role="Program Beneficiary"
                image="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747641876/photo_2024-12-19_11-51-59_plqiva.jpg"
                quote="The support from Happy Me Happy You Organization has changed my family's life completely. My children now have access to education and clean water, and I've learned valuable skills that help me provide for them."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-hmhy-purple text-white">
        <div className="hmhy-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to create lasting change in the lives of children and families in Western Kenya.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-hmhy-purple">
              <Link to="/contact">Become a Volunteer</Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/donor-dashboard">Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
