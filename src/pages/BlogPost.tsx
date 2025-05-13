
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Fake blog post data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with HappyMeHappyYou",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    content: `
      <p>Welcome to HappyMeHappyYou! We're thrilled to have you join our community of changemakers and supporters.</p>
      
      <p>Our organization was founded with a clear mission: to create sustainable change and spread happiness in Western Kenya. Through various initiatives and programs, we focus on addressing the most pressing needs of local communities while empowering them to build a better future.</p>
      
      <h2>Our Journey</h2>
      
      <p>The journey of HappyMeHappyYou began when our founder, Elvis Otieno, recognized the need for a holistic approach to community development in his home region. What started as a small initiative to provide clean water has grown into a multi-faceted organization that tackles education, health, economic empowerment, and more.</p>
      
      <p>We believe that true happiness comes from having basic needs met and opportunities to thrive. That's why our programs are designed to create immediate impact while building sustainable solutions for long-term change.</p>
      
      <h2>How You Can Help</h2>
      
      <p>There are many ways to get involved with our mission:</p>
      
      <ul>
        <li>Donate to support our programs</li>
        <li>Volunteer your time and skills</li>
        <li>Sponsor a child's education</li>
        <li>Partner with us as an organization</li>
        <li>Spread the word about our work</li>
      </ul>
      
      <p>Every contribution, big or small, helps us create more smiles and change more lives in Western Kenya.</p>
      
      <p>Stay tuned to our blog for regular updates, success stories, and opportunities to get involved. Together, we can make a difference!</p>
    `,
    author: "Elvis Otieno",
    date: "May 12, 2023",
    slug: "getting-started"
  },
  {
    id: 2,
    title: "How Water Filters Change Lives",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    content: `
      <p>Access to clean water is something many of us take for granted, but in parts of Western Kenya, it remains a daily challenge that impacts health, education, and economic opportunities.</p>
      
      <p>Through our Water Filter Program, HappyMeHappyYou has been working to transform this reality for hundreds of families. The simple technology of ceramic water filters is making an extraordinary difference in communities across the region.</p>
      
      <h2>The Problem</h2>
      
      <p>Many families in Western Kenya rely on water sources that are contaminated with bacteria and parasites. This leads to frequent waterborne illnesses, especially among children, causing:</p>
      
      <ul>
        <li>Missed school days and decreased academic performance</li>
        <li>Medical expenses that strain already limited family resources</li>
        <li>Reduced work productivity for adults</li>
        <li>In severe cases, preventable deaths, particularly among young children</li>
      </ul>
      
      <h2>Our Solution</h2>
      
      <p>Our ceramic water filters are:</p>
      
      <ul>
        <li>Effective at removing 99.9% of bacteria and parasites</li>
        <li>Locally manufactured, supporting the regional economy</li>
        <li>Simple to use and maintain</li>
        <li>Durable, lasting up to 2-3 years with proper care</li>
        <li>Cost-effective at approximately $25 per filter, which serves a family of 5-7 people</li>
      </ul>
      
      <h2>The Impact</h2>
      
      <p>Since launching this program, we've distributed over 500 water filters, impacting approximately 3,000 individuals. The results have been remarkable:</p>
      
      <ul>
        <li>85% reduction in reported cases of diarrheal diseases in recipient families</li>
        <li>42% reduction in school absences among children from these households</li>
        <li>Families report saving an average of $15 per month on medical expenses</li>
        <li>Women and girls save 1-2 hours daily that was previously spent collecting and treating water</li>
      </ul>
      
      <p>These statistics represent real improvements in quality of life and opportunities for these communities.</p>
      
      <h2>Meet Sarah's Family</h2>
      
      <p>Sarah, a mother of four in Kakamega County, received a water filter six months ago. Before the filter, her children were frequently ill with stomach problems, and she spent a significant portion of her limited income on medication and hospital visits.</p>
      
      <p>"The water filter has changed everything for us," she shares. "My children are healthier and attending school regularly. I'm able to save money and even start a small vegetable garden with the time I used to spend boiling water."</p>
      
      <h2>How You Can Help</h2>
      
      <p>A donation of $25 provides a water filter for one family, creating immediate health benefits and long-term opportunities. Join us in making clean water accessible to more families in Western Kenya.</p>
    `,
    author: "Sarah Johnson",
    date: "June 3, 2023",
    slug: "water-filters-change-lives"
  },
  // Add similar detailed content for other posts
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchPost = () => {
      setLoading(true);
      const foundPost = blogPosts.find(p => p.slug === slug);
      
      setTimeout(() => {
        setPost(foundPost || null);
        setLoading(false);
      }, 500); // Simulate loading
    };
    
    fetchPost();
  }, [slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading post...</p>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="min-h-screen py-16">
        <div className="hmhy-container text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Post Image */}
      <div 
        className="h-64 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${post.image}')`
        }}
      >
        <div className="hmhy-container h-full flex flex-col justify-end pb-8">
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-bold">{post.title}</h1>
          </div>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="py-12">
        <div className="hmhy-container">
          <div className="max-w-3xl mx-auto">
            {/* Post Metadata */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">By {post.author}</span> • {post.date}
                </p>
              </div>
              <Link to="/blog" className="flex items-center text-hmhy-purple hover:underline">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to all posts
              </Link>
            </div>
            
            {/* Post Content */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            
            {/* Post Footer */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link to="/blog" className="flex items-center text-hmhy-purple hover:underline">
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to all posts
                </Link>
                <div className="flex space-x-2">
                  {/* Social sharing would go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
