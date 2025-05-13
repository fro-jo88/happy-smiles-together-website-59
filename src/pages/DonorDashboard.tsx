
import React from 'react';

const DonorDashboard = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="hmhy-container">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Donor Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Track your donations and see the impact you're making in our community.
          </p>
          
          {/* Placeholder content */}
          <div className="bg-gray-100 p-12 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p>
              We're currently developing our donor management system. 
              Soon you'll be able to track your donations, receive updates on the 
              projects you've supported, and manage your recurring gifts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
