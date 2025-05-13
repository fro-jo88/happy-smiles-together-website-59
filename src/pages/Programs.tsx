
import React from 'react';

const Programs = () => {
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
      
      {/* Programs Content */}
      <div className="section-padding">
        <div className="hmhy-container">
          <div className="text-center max-w-3xl mx-auto">            
            {/* Placeholder content */}
            <div className="bg-gray-100 p-12 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p>
                We're currently updating detailed information about our programs. 
                Please check back soon to learn more about our feeding program, 
                scholarship initiatives, water filters distribution, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
