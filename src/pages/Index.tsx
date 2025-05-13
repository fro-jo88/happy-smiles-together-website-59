
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HandHeart, Users, Award, ArrowRight, BookOpen, Utensils, GraduationCap, Droplets, Heart, Lightbulb, Scissors, HomeIcon, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import YouTubeBackground from '@/components/YoutubeBackground';
import CountUp from '@/components/CountUp';
import ValueCard from '@/components/ValueCard';
import ProgramCard from '@/components/ProgramCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  
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
    <div className="min-h-screen">
      {/* Hero Section with YouTube Background */}
      <section className="h-screen">
        <YouTubeBackground videoId="um54YAy6V9Y">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              We Believe In Sharing Smiles
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
              Small acts of kindness can make a big difference…
            </p>
            <Button asChild size="lg" className="bg-hmhy-green hover:bg-hmhy-green-dark animate-fade-in">
              <Link to="/donor-dashboard">Donate Now</Link>
            </Button>
          </div>
        </YouTubeBackground>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="hmhy-container">
          <h2 className="section-title text-hmhy-green">Our Core Values</h2>
          <p className="section-subtitle">
            Our commitment to creating lasting positive change is guided by these principles
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ValueCard 
              title="Compassion" 
              description="Driven by empathy, we extend care to the most vulnerable in our community." 
              icon={<HandHeart size={32} />}
            />
            
            <ValueCard 
              title="Empowerment" 
              description="Equipping individuals and families with skills and resources for self-reliance." 
              icon={<Lightbulb size={32} />}
            />
            
            <ValueCard 
              title="Collaboration" 
              description="Partnering with local and global communities to create sustainable impact." 
              icon={<Users size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="hmhy-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Children smiling" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hmhy-green">
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

      {/* Mission - Vision - Values */}
      <section className="section-padding bg-hmhy-blue-light">
        <div className="hmhy-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-hmhy-green">Our Mission</h3>
                <p className="text-gray-600">
                  To promote education, health, and sustainability through community-based programs
                  that empower children and families to break the cycle of poverty.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-hmhy-green">Our Vision</h3>
                <p className="text-gray-600">
                  Thriving families leading prosperous communities where every child has the opportunity
                  to reach their full potential.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-hmhy-green">Our Values</h3>
                <p className="text-gray-600">
                  Care and empathy for vulnerable children, accountability in all our actions,
                  and sustainable solutions that respect local culture and environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="section-padding">
        <div className="hmhy-container">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">
            Together with our donors and partners, we've made a significant difference
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12 text-center">
            <div className="flex flex-col items-center">
              <CountUp end={100} suffix="+" />
              <p className="mt-2 text-gray-600">Children Supported</p>
            </div>
            
            <div className="flex flex-col items-center">
              <CountUp end={10} suffix="+" />
              <p className="mt-2 text-gray-600">Years of Care</p>
            </div>
            
            <div className="flex flex-col items-center">
              <CountUp end={5000} suffix="+" />
              <p className="mt-2 text-gray-600">Children & Youths</p>
            </div>
            
            <div className="flex flex-col items-center">
              <CountUp end={1000} suffix="+" />
              <p className="mt-2 text-gray-600">Global Volunteers</p>
            </div>
            
            <div className="flex flex-col items-center">
              <CountUp end={200} suffix="+" />
              <p className="mt-2 text-gray-600">Education Programs</p>
            </div>
            
            <div className="flex flex-col items-center">
              <CountUp end={100} suffix="+" />
              <p className="mt-2 text-gray-600">Families Helped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Causes */}
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

      {/* Success Stories / Testimonials */}
      <section className="section-padding">
        <div className="hmhy-container">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Hear from those whose lives have been touched by our programs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <TestimonialCard
              name="Phanice Mukhungu"
              role="Program Beneficiary"
              image="/placeholder.svg"
              quote="Thanks to the scholarship program, I can now pursue my dream of becoming a teacher and help other children in my community."
            />
            
            <TestimonialCard
              name="Ewa"
              role="Donor from Ireland"
              image="/placeholder.svg"
              quote="Supporting HappyMeHappyYou has been one of the most rewarding experiences. I can see the direct impact of my contributions."
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-outline">
              <Link to="/blog">Read More Stories <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-hmhy-green text-white">
        <div className="hmhy-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to create lasting change in the lives of children and families in Western Kenya.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-hmhy-green">
              <Link to="/contact">Become a Volunteer</Link>
            </Button>
            <Button asChild size="lg" className="bg-hmhy-yellow text-black hover:bg-hmhy-yellow-dark">
              <Link to="/donor-dashboard">Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
