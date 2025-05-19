
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="hmhy-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747121083/logo_q6v8po.webp" alt="HappyMeHappyYou" className="h-16" />
            </Link>
            <p className="text-gray-300 mb-4">
              HappyMeHappyYou is a community-based organization supporting children and families
              in Western Kenya through education, health programs, and sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-hmhy-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-hmhy-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-hmhy-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-white hover:text-hmhy-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/organization" className="text-gray-300 hover:text-white">Our Organization</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white">Our Team</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Our Programs</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Feeding Program</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Scholarship Program</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Adopt/Mentor a Child</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Water Filters</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Farming & Income Training</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Sewing Classes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 text-hmhy-orange" />
                <span>+254 123 456 789</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 text-hmhy-orange" />
                <span>info@happymehappyyou.org</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-hmhy-orange" />
                <span>Western Kenya, Kakamega County</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-t border-b border-gray-800">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">Become a Volunteer</h4>
            <Link to="/contact" className="bg-hmhy-orange text-black hover:bg-hmhy-orange-dark">Learn More →</Link>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">Partner with Us Today</h4>
            <Link to="/contact" className="bg-hmhy-orange text-black hover:bg-hmhy-orange-dark">Get in Touch →</Link>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">Join Us to Change Lives</h4>
            <Link to="/donor-dashboard" className="bg-hmhy-orange text-black hover:bg-hmhy-orange-dark">Donate Now →</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} HappyMeHappyYou. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-hmhy-orange" /> for a better tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
