
import React from 'react';

const Programs = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="hmhy-container">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Discover the various initiatives through which we support children and families in Western Kenya.
          </p>
          
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
  );
};

export default Programs;
