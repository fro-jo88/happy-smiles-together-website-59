
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, School, Users, Leaf, BadgeCheck, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Organization = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hmhy-green-light py-16 md:py-24">
        <div className="hmhy-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-hmhy-green mb-6">
              Our Organization
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Happy Me Happy You (C.B.O) is a registered community-based organization 
              dedicated to creating sustainable change in Western Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="hmhy-container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>
                Happy Me Happy You (C.B.O) is a registered community-based organization in Western Kenya. 
                We work to break the cycle of poverty through education sponsorship, clean water access, 
                family empowerment, nutrition programs, and compassionate donor support. Our approach 
                promotes sustainable, community-led growth with transparency at every level.
              </p>
              
              <div className="my-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-hmhy-green-light p-3 rounded-full">
                          <School className="h-6 w-6 text-hmhy-green" />
                        </div>
                        <h3 className="text-xl font-bold">Educating for a Better Future</h3>
                      </div>
                      <p className="text-gray-700">
                        We believe that education is the key to breaking the cycle of poverty. 
                        Our scholarship programs provide children with access to quality education, 
                        from primary school through to vocational training and university.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-hmhy-yellow-light p-3 rounded-full">
                          <Users className="h-6 w-6 text-hmhy-yellow" />
                        </div>
                        <h3 className="text-xl font-bold">Volunteerism & Global Engagement</h3>
                      </div>
                      <p className="text-gray-700">
                        We connect volunteers from around the world with our programs, 
                        creating meaningful cultural exchanges and bringing diverse skills 
                        and perspectives to our work.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-hmhy-blue-light p-3 rounded-full">
                          <Leaf className="h-6 w-6 text-hmhy-blue" />
                        </div>
                        <h3 className="text-xl font-bold">Family Empowerment Programs</h3>
                      </div>
                      <p className="text-gray-700">
                        We work with families to develop sustainable livelihoods through 
                        farming training, sewing classes, and other income-generating activities 
                        that promote self-reliance.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-hmhy-green-light p-3 rounded-full">
                          <BadgeCheck className="h-6 w-6 text-hmhy-green" />
                        </div>
                        <h3 className="text-xl font-bold">Transparent Donor Stewardship</h3>
                      </div>
                      <p className="text-gray-700">
                        We maintain the highest standards of transparency and accountability, 
                        ensuring that donors know exactly how their contributions are making 
                        a difference in the community.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-12">Our Approach</h2>
              <p>
                At HappyMeHappyYou, we believe in community-driven solutions. Rather than imposing 
                external ideas, we work closely with local leaders, families, and children to identify 
                needs and develop programs that are culturally appropriate and sustainable.
              </p>
              
              <p className="mt-4">
                We recognize that every community is unique, with its own strengths and challenges. 
                That's why our programs are flexible and responsive, evolving as needs change and 
                as we learn from our experiences.
              </p>
              
              <div className="my-8 p-6 bg-hmhy-yellow-light rounded-lg border-l-4 border-hmhy-yellow">
                <h3 className="text-xl font-bold mb-2">Our Registration</h3>
                <p>
                  HappyMeHappyYou is officially registered as a Community Based Organization (C.B.O) 
                  in Kenya, allowing us to operate legally and collaborate with government agencies 
                  and other partners to expand our impact.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold mt-12">Our Partners</h2>
              <p>
                We believe in the power of collaboration. Over the years, we have built strong 
                partnerships with:
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li>Local schools and educational institutions</li>
                <li>Health facilities and medical professionals</li>
                <li>Agricultural extension officers and farming experts</li>
                <li>International volunteer organizations</li>
                <li>Donors and supporters from around the world</li>
              </ul>
              
              <p className="mt-4">
                These partnerships enable us to leverage resources, knowledge, and networks to 
                maximize our impact in the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-hmhy-green text-white">
        <div className="hmhy-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-lg mb-8">
              Join our mission to create sustainable change in Western Kenya. Together, we can 
              make a lasting difference in the lives of children and families.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-hmhy-green">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" className="bg-hmhy-yellow text-black hover:bg-hmhy-yellow-dark">
                <Link to="/donor-dashboard">Become a Donor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organization;
