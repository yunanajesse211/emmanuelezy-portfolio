'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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
    <section id="contact" className="py-20 bg-black/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="text-center mb-12 animate-fade-in opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-theme-blue mx-auto mb-6" />
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out to me.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div
            className="w-full md:w-5/12 animate-fade-in opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="bg-secondary p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              <div className="space-y-6">
                {/* Contact Details */}
                <div className="flex items-start gap-4">
                  <div className="text-theme-blue mt-1">
                    {/* Phone Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+447867625493" className="text-theme-blue hover:underline">
                      +44 7867 625493
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-theme-blue mt-1">
                    {/* Email Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0V6.993a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:ezekielsanuel@gmail.com" className="text-theme-blue hover:underline">
                      ezekielsanuel@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-theme-blue mt-1">
                    {/* Location Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-white/70">Based in UK, Open to relocation/travel</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-theme-blue mt-1">
                    {/* LinkedIn Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M16.5 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM6 9.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v8.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V9.75zM3 7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V7.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/ezeknuel" className="text-theme-blue hover:underline">
                      www.linkedin.com/in/ezeknuel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="w-full md:w-7/12 animate-fade-in opacity-0"
            style={{ animationDelay: '0.5s' }}
          >
            <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 mt-2 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 mt-2 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 rounded-md"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 mt-2 rounded-md"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
