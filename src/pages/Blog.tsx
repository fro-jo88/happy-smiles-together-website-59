
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with HappyMeHappyYou",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    excerpt: "Learn about our mission and how we're making a difference in Western Kenya. Our journey began with a simple idea: everyone deserves happiness.",
    author: "Elvis Otieno",
    date: "May 12, 2023",
    slug: "getting-started"
  },
  {
    id: 2,
    title: "How Water Filters Change Lives",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    excerpt: "Access to clean water is transforming communities and improving health outcomes across the region. See the impact of our water filter program.",
    author: "Sarah Johnson",
    date: "June 3, 2023",
    slug: "water-filters-change-lives"
  },
  {
    id: 3,
    title: "Volunteer Stories: A Week in Kenya",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    excerpt: "Follow the journey of our volunteers as they work alongside local communities to create sustainable change and forge lasting connections.",
    author: "Michael Chen",
    date: "July 15, 2023",
    slug: "volunteer-stories"
  },
  {
    id: 4,
    title: "Education Initiatives Update",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    excerpt: "Our scholarship program has helped over 50 students continue their education despite financial challenges. Read their inspiring stories.",
    author: "Elvis Otieno",
    date: "August 22, 2023",
    slug: "education-initiatives"
  },
  {
    id: 5,
    title: "Community Spotlight: Kakamega",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    excerpt: "Meet the families and children we're working with in the Kakamega region and learn about the specific challenges they face.",
    author: "Lisa Wanjiku",
    date: "September 5, 2023",
    slug: "community-spotlight-kakamega"
  },
  {
    id: 6,
    title: "The Impact of Clean Cooking Stoves",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    excerpt: "Our clean cooking stove initiative is reducing indoor air pollution and improving health outcomes for families across Western Kenya.",
    author: "David Mwangi",
    date: "October 18, 2023",
    slug: "clean-cooking-stoves"
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Calculate current posts based on pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

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
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-hmhy-purple mb-2">Latest Updates</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Stay informed about our projects, impact stories, and community developments through our regularly updated blog.
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="py-6 flex-grow">
                  <div className="text-sm text-gray-500 mb-2">
                    {post.date} • by {post.author}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild variant="outline" className="text-hmhy-purple hover:text-hmhy-purple-dark hover:bg-hmhy-purple-light">
                    <Link to={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink 
                        onClick={() => setCurrentPage(index + 1)}
                        isActive={currentPage === index + 1}
                        href="#"
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
