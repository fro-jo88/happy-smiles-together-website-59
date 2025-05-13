
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ElvisStory = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hmhy-yellow-light py-16 md:py-24">
        <div className="hmhy-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-hmhy-yellow-dark mb-6">
                Elvis Ingadi's Story
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                From personal tragedy to founding a community-changing organization
              </p>
              <p className="text-gray-600">
                A story of resilience, hope, and the power of giving back.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                alt="Elvis Ingadi, Founder"
                className="rounded-xl shadow-lg max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="section-padding">
        <div className="hmhy-container">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>The Beginning</h2>
              <p>
                Elvis Ingadi's journey began in a small village in Western Kenya, where he was born into a family facing significant hardship. At a young age, Elvis experienced the loss of both parents, leaving him and his siblings to navigate life without their guidance and support.
              </p>
              
              <p>
                "Losing my parents at a young age taught me the importance of community support," Elvis recalls. "I was fortunate enough to have neighbors and extended family members who stepped in to ensure we had food to eat and could continue our education."
              </p>
              
              <blockquote className="italic border-l-4 border-hmhy-green pl-4 py-2 my-8">
                "I made a promise to myself that if I ever had the opportunity, I would create a space where children like me could find the support they needed to thrive, despite their circumstances."
              </blockquote>
              
              <h2>Finding Purpose Through Education</h2>
              <p>
                Despite the challenges, Elvis remained committed to his education, recognizing it as his path to a better future. Through determination and with the help of community supporters, he completed his schooling and pursued further studies in community development.
              </p>
              
              <p>
                "Education opened doors for me that I never thought possible," Elvis says. "It wasn't just about learning facts from books, but about understanding how communities work together and how sustainable change happens."
              </p>
              
              <div className="my-8">
                <img
                  src="/placeholder.svg"
                  alt="Elvis working with children"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">Elvis with some of the first children supported by HappyMeHappyYou</p>
              </div>
              
              <h2>The Birth of HappyMeHappyYou</h2>
              <p>
                In 2012, with nothing more than a vision and unwavering determination, Elvis founded HappyMeHappyYou. Beginning with just five children in need of support, he started a small feeding program, ensuring they had at least one nutritious meal each day.
              </p>
              
              <p>
                "We started so small, cooking meals in a borrowed kitchen and serving them under a tree," Elvis remembers. "But seeing the smiles on those children's faces when they ate – that's where our name came from. Their happiness became my happiness."
              </p>
              
              <p>
                From those humble beginnings, Elvis worked tirelessly to build partnerships, raise funds, and expand the organization's reach. He recruited passionate local staff who shared his vision and connected with international volunteers who brought new skills and perspectives.
              </p>
              
              <blockquote className="italic border-l-4 border-hmhy-yellow pl-4 py-2 my-8">
                "I believe that every child deserves a chance to dream, and every family deserves the opportunity to build a sustainable future. That's what drives me every single day."
              </blockquote>
              
              <h2>Building a Legacy of Impact</h2>
              <p>
                Today, under Elvis's leadership, HappyMeHappyYou has grown to support over 100 children through education sponsorships, feeding programs, and mentorship. The organization has expanded to include water filter distribution, family empowerment initiatives, and agricultural training.
              </p>
              
              <p>
                "What makes me most proud is not just the number of people we've helped, but the quality of the relationships we've built," Elvis explains. "We know every child by name. We know their dreams, their challenges, and their potential. That's the foundation of genuine, lasting impact."
              </p>
              
              <h2>Looking to the Future</h2>
              <p>
                Elvis continues to lead HappyMeHappyYou with the same passion and commitment that inspired its founding. His vision for the future includes expanding educational opportunities, developing more sustainable income-generating projects for families, and creating a model for community-led development that can be replicated in other areas.
              </p>
              
              <p>
                "My dream is to see the children we support grow into leaders who will continue transforming their communities," Elvis says. "That's how true, sustainable change happens – when it comes from within."
              </p>
              
              <p>
                Elvis's story is a powerful testament to the impact one individual can have when they choose to transform personal hardship into community empowerment. Through HappyMeHappyYou, his legacy continues to grow, touching more lives with each passing year.
              </p>
            </article>
            
            <div className="mt-12 p-8 bg-hmhy-green-light rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Honor Elvis's Work</h3>
              <p className="text-lg mb-6">
                You can help continue Elvis's mission by supporting a child or family through one of our programs.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/donor-dashboard">Sponsor a Child in Elvis's Honor</Link>
              </Button>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <Button asChild variant="outline">
                <Link to="/team">&larr; Back to Team</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/blog">Read More Stories &rarr;</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElvisStory;
