
import React from 'react';
import { 
  HandHelping, Users, GraduationCap, Handshake, 
  Droplets, UserRound, ShieldCheck, Salad, 
  Scissors, ShowerHead, MessageCircle, Book 
} from 'lucide-react';
import ProgramCard from '@/components/ProgramCard';

const Programs = () => {
  const programs = [
    {
      title: "Volunteer",
      description: "Join our volunteer program and help create positive change in our community. Spread joy, empower lives, and be the reason someone smiles today.",
      icon: <HandHelping />,
      link: "/contact"
    },
    {
      title: "Mentor a Child",
      description: "Inspire a brighter future by sharing your skills and guidance with a child in need. Help build confidence and make a lasting impact.",
      icon: <Users />,
      link: "/contact"
    },
    {
      title: "Adopt a Family",
      description: "Support families with nutritious meals and essential resources. Your sponsorship provides real hope and dignity.",
      icon: <UserRound />,
      link: "/contact"
    },
    {
      title: "Community Works",
      description: "Empower local communities through sustainable initiatives. Join us in building stronger, happier neighborhoods.",
      icon: <Handshake />,
      link: "/contact"
    },
    {
      title: "Water and Sanitation",
      description: "We promote clean, hygienic, and welcoming environments for all, as part of our mission to foster health and happiness.",
      icon: <Droplets />,
      link: "/contact"
    },
    {
      title: "Youth Development",
      description: "We nurture the next generation of leaders by equipping youth with skills, confidence, and opportunities for personal growth.",
      icon: <GraduationCap />,
      link: "/contact"
    },
    {
      title: "Emergency Relief",
      description: "We provide timely aid to communities impacted by disasters, ensuring immediate support and long-term recovery.",
      icon: <ShieldCheck />,
      link: "/contact"
    },
    {
      title: "Food Security",
      description: "Everyone deserves safe, nutritious food. We're building food-secure communities where no one is left behind.",
      icon: <Salad />,
      link: "/contact"
    },
    {
      title: "Sewing Program",
      description: "Support vocational training in sewing—empowering creativity, income generation, and self-reliance.",
      icon: <Scissors />,
      link: "/contact"
    },
    {
      title: "Mosquito Nets Distribution",
      description: "Help us protect vulnerable families from malaria with life-saving mosquito nets and awareness programs.",
      icon: <ShowerHead />,
      link: "/contact"
    },
    {
      title: "Counseling Services",
      description: "We offer safe, supportive spaces for mental health support, healing, and emotional well-being.",
      icon: <MessageCircle />,
      link: "/contact"
    },
    {
      title: "Scholarships",
      description: "Make education accessible and life-changing by funding scholarships for bright, deserving students.",
      icon: <Book />,
      link: "/contact"
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
              Our Programs
            </h1>
            <p className="text-xl mb-8">
              Discover the various initiatives through which we support children and families in Western Kenya.
            </p>
          </div>
        </div>
      </section>
      
      {/* Programs Introduction */}
      <div className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="hmhy-container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hmhy-purple mb-4">
              Be Part of Us in Sharing Smiles
            </h2>
            <p className="text-lg text-hmhy-orange font-semibold mb-6">Partner with Us</p>
            <div className="w-16 h-1 bg-hmhy-purple mx-auto mb-8"></div>
            <h3 className="text-2xl font-bold mb-6">Our Programs</h3>
            <p className="text-gray-600">
              Through our various programs, we strive to create lasting positive change in the lives of children and families in Western Kenya. 
              Each program addresses specific needs while working together toward our mission of spreading happiness and improving lives.
            </p>
          </div>
          
          {/* Programs Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </div>
  );
};

export default Programs;
