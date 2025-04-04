
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-cyan/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <span className="px-4 py-2 rounded-full text-xs font-semibold bg-theme-cyan/20 text-theme-cyan mb-4 inline-block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/70">
            Have a project idea or need data science expertise? I'm always open to discussing
            new opportunities and collaborations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="w-full lg:w-5/12 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="glass-effect p-8 rounded-2xl h-full border border-theme-cyan/10">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-theme-cyan/20 rounded-xl">
                    <Mail className="h-6 w-6 text-theme-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email Address</h4>
                    <a 
                      href="mailto:yunanajesse@gmail.com" 
                      className="text-theme-cyan hover:underline"
                    >
                      yunanajesse@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-theme-cyan/20 rounded-xl">
                    <Phone className="h-6 w-6 text-theme-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Phone Number</h4>
                    <a 
                      href="tel:+447867625493" 
                      className="text-theme-cyan hover:underline"
                    >
                      +44 7867 625493
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-theme-cyan/20 rounded-xl">
                    <MapPin className="h-6 w-6 text-theme-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Location</h4>
                    <p className="text-white/70">London, United Kingdom</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Connect with Me</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/yunanajesse211" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-theme-cyan/10 text-theme-cyan
                      hover:bg-theme-cyan hover:text-black transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-theme-cyan/10 text-theme-cyan
                      hover:bg-theme-cyan hover:text-black transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-theme-cyan/10 text-theme-cyan
                      hover:bg-theme-cyan hover:text-black transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-7/12 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="glass-effect p-8 rounded-2xl border border-theme-cyan/10">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white/80">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-theme-cyan/20 rounded-xl text-white 
                        focus:outline-none focus:ring-2 focus:ring-theme-cyan/50 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/80">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-theme-cyan/20 rounded-xl text-white 
                        focus:outline-none focus:ring-2 focus:ring-theme-cyan/50 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-theme-cyan/20 rounded-xl text-white 
                      focus:outline-none focus:ring-2 focus:ring-theme-cyan/50 focus:border-transparent"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-theme-cyan/20 rounded-xl text-white resize-none 
                      focus:outline-none focus:ring-2 focus:ring-theme-cyan/50 focus:border-transparent"
                    placeholder="Write your message here..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-theme-cyan hover:bg-theme-cyan/80 text-black py-6 text-lg rounded-xl flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
