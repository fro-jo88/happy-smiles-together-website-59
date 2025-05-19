import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonorDashboard = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/contact'); // Redirect to the Contact page
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Support Our Mentorship Program – Donate Today!</h2>
            <p className="mb-6 text-lg md:text-xl">
              Help us inspire and empower the next generation. Your donation helps provide guidance, tools, and opportunities.
            </p>
            <button
              onClick={handleDonateClick}
              className="bg-hmhy-orange text-black hover:bg-hmhy-orange-dark"
            >
              Donate Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
