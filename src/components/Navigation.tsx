
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Organization', path: '/organization' },
    { name: 'The Team', path: '/team' },
    { name: 'Elvis\' Story', path: '/elvis-story' },
    { name: 'Our Programs', path: '/programs' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Donor Dashboard', path: '/donor-dashboard' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="hmhy-container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <img src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747121083/logo_q6v8po.webp" alt="HappyMeHappyYou" className="h-12" />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-hmhy-orange font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-hmhy-orange hover:bg-hmhy-orange-dark font-bold">
            Donate Now
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 lg:hidden">
            <div className="hmhy-container py-4 flex justify-between items-center">
              <Link to="/" className="flex items-center">
                <img src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1747121083/logo_q6v8po.webp" alt="HappyMeHappyYou" className="h-12" />
              </Link>
              <button onClick={toggleMenu} aria-label="Close navigation menu">
                <X size={24} />
              </button>
            </div>
            <nav className="hmhy-container flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg py-2 border-b border-gray-100 text-gray-700"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-hmhy-orange hover:bg-hmhy-orange-dark mt-4 font-bold">
                Donate Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
