import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CountUp from '@/components/CountUp';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-16 md:py-24 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')",
          backgroundSize: "cover"
        }}
      >
        <div className="hmhy-container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About HappyMeHappyYou
            </h1>
            <p className="text-xl mb-8">
              We are a community-based organization dedicated to supporting children and
              families in Western Kenya through education, health, and development programs.
            </p>
            <Button asChild size="lg" className="bg-hmhy-orange hover:bg-hmhy-orange-dark">
              <Link to="/donor-dashboard">Make a Donation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="py-12 bg-white">
        <div className="hmhy-container">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-hmhy-green-light mb-4">
                <CountUp end={100} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold">Children Supported</h3>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-hmhy-yellow-light mb-4">
                <CountUp end={10} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold">Years of Care</h3>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-hmhy-blue-light mb-4">
                <CountUp end={200} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold">Education Programs</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="hmhy-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                HappyMeHappyYou began with a simple idea: bringing smiles to the faces of children in need.
                Founded by Elvis Ingadi, who himself experienced hardship as a child, our organization
                has grown from a small local initiative to a community-based organization that has touched
                the lives of hundreds of children and families in Western Kenya.
              </p>
              
              <p className="mt-4">
                Through our work, we focus on breaking the cycle of poverty by providing education,
                clean water, nutritious food, and family empowerment programs. We believe that sustainable
                change comes from within communities, which is why we work closely with local leaders,
                teachers, and families to develop programs that meet real needs.
              </p>
              
              <p className="mt-4">
                Our team consists of dedicated staff and volunteers who share a common vision:
                a world where every child has the opportunity to grow, learn, and thrive.
              </p>

              <div className="my-8">
                <h3 className="text-2xl font-bold">Mission, Vision & Values</h3>
                
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-hmhy-green">Our Mission</h4>
                  <p>
                    To promote education, health, and sustainability through community-based programs
                    that empower children and families to break the cycle of poverty.
                  </p>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-hmhy-green">Our Vision</h4>
                  <p>
                    Thriving families leading prosperous communities where every child has the opportunity
                    to reach their full potential.
                  </p>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-hmhy-green">Our Values</h4>
                  <ul className="list-disc pl-5">
                    <li><strong>Compassion:</strong> We approach our work with empathy and care for those we serve.</li>
                    <li><strong>Integrity:</strong> We are transparent in our actions and accountable to our donors and beneficiaries.</li>
                    <li><strong>Sustainability:</strong> We create programs that promote long-term self-reliance.</li>
                    <li><strong>Collaboration:</strong> We believe in the power of partnerships to create lasting change.</li>
                    <li><strong>Respect:</strong> We honor the dignity, culture, and potential of every individual.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-hmhy-blue-light">
        <div className="hmhy-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg mb-8">
              There are many ways to get involved with HappyMeHappyYou. Whether you want to volunteer,
              donate, or sponsor a child, your support makes our work possible.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="btn-primary">
                <Link to="/organization">Learn About Our Organization <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild className="btn-secondary">
                <Link to="/team">Meet Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild className="btn-outline">
                <Link to="/elvis-story">Read Elvis' Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
