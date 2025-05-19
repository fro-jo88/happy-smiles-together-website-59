import React from 'react';

const blogPosts = [
  {
    title: "Changing Lives One Family at a Time: The Power of Adoption Support",
    date: "April 26, 2025",
    category: "Charity",
    readTime: "6 min read",
    excerpt:
      "Imagine the profound joy of a child finding a forever home or a struggling family receiving the support they desperately need...",
  },
  {
    title: "Infrastructure Development: Building Community Centers",
    date: "April 26, 2025",
    category: "Uncategorized",
    readTime: "6 min read",
    excerpt:
      "Imagine a place where children can learn, families can gather, and communities can thrive...",
  },
  {
    title: "Clean Water Access: Drilling and Maintenance of Wells",
    date: "April 26, 2025",
    category: "Charity",
    readTime: "5 min read",
    excerpt:
      "Access to clean water is not just a basic human need—it’s a lifeline...",
  },
  // Add other blog posts similarly...
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-16 md:py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')",
          backgroundSize: "cover",
        }}
      >
        <div className="hmhy-container">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl mb-8">
              Stories of impact, updates, and insights from our work in Western Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="py-16">
        <div className="hmhy-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{post.date} • {post.category} • {post.readTime}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 hover:underline font-medium">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;