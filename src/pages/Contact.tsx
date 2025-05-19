
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-16 md:py-24 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')",
          backgroundSize: "cover"
        }}
      >
        <div className="hmhy-container">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl">
              We'd love to hear from you. Get in touch with our team for any inquiries,
              partnership opportunities, or ways to get involved.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section-padding">
        <div className="hmhy-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-hmhy-green-light p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-hmhy-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-gray-600 mt-1">+254 123 456 789</p>
                    <p className="text-gray-600">+254 987 654 321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hmhy-green-light p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-hmhy-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-600 mt-1">info@happymehappyyou.org</p>
                    <p className="text-gray-600">donations@happymehappyyou.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hmhy-green-light p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-hmhy-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p className="text-gray-600 mt-1">Western Kenya</p>
                    <p className="text-gray-600">Kakamega County</p>
                    <a
                      href="https://www.google.com/maps/place/Haven+Court/@-1.261361,36.795884,103660m/data=!3m1!1e3!4m6!3m5!1s0x182f17693b368f0f:0x13091f14086655c5!8m2!3d-1.2613607!4d36.7958842!16s%2Fg%2F11c5g_94dv?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hmhy-green underline mt-1 block"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hmhy-green-light p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-hmhy-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Office Hours</h3>
                    <p className="text-gray-600 mt-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Map Embed */}
              <div className="mt-8 rounded-lg overflow-hidden h-64 flex items-center justify-center bg-gray-200">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.420684694992!2d36.795884!3d-1.2613607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17693b368f0f%3A0x13091f14086655c5!2sHaven%20Court!5e0!3m2!1sen!2ske!4v1717690000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '16rem', width: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="section-padding bg-hmhy-green-light">
        <div className="hmhy-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ways to Get Involved</h2>
            <p className="text-lg mb-8">
              We welcome your support in various ways. Use the contact form above to inquire about:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
                <p className="text-gray-600">
                  Offer your time and skills to support our programs locally or remotely.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Partner</h3>
                <p className="text-gray-600">
                  Collaborate with us as an organization, school, or business to create impact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Donate</h3>
                <p className="text-gray-600">
                  Support our work financially through one-time or recurring donations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
