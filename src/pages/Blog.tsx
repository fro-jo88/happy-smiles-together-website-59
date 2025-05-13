
import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-16 md:py-24 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')",
          backgroundSize: "cover"
        }}
      >
        <div className="hmhy-container">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl mb-8">
              Stories of impact, updates, and insights from our work in Western Kenya.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <div className="py-16">
        <div className="hmhy-container">
          <div className="text-center max-w-3xl mx-auto">            
            {/* Placeholder content */}
            <div className="bg-gray-100 p-12 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p>
                We're currently working on sharing our stories with you. 
                Please check back soon for updates on our programs, success stories, 
                and ways to get involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
