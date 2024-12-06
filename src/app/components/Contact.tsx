"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { contactItems } from '../Data/data'; // Adjust path as per your project
import HeroImage from '../../../public/Hero.png';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    const { name, email, subject, message } = formData;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, subject, message },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      setIsSent(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear the success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-56 p-5" id="Contact">
      <div className="flex justify-center">
        <div className="relative">
          <p className="text-6xl font-bold">Contact Me</p>
          <p className="absolute -left-3 top-5 text-8xl opacity-15 font-bold">
            Contact
          </p>
        </div>
      </div>
      <p className="mt-10 text-center text-gray-400">
        Let&apos;s Connect and Build Something Amazing Together!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
        {contactItems.map((item, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center">
              <div className="h-24 w-24 primary-color rounded-full bg-secondary flex justify-center items-center">
                <item.icon fontSize="large" />
              </div>
            </div>
            <p className="mt-8 uppercase">{item.name}</p>
            <p className="mt-8">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-secondary">
            <Image
              src={HeroImage}
              alt="Hero Image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-white text-black p-10">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  placeholder="Your Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div>
                <input
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div>
                <input
                  placeholder="Subject"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="textarea h-52"
                />
              </div>
              <button
                type="submit"
                className="text-xs tracking-widest button primary-button text-black w-fit mt-5"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {isSent && (
                <p className="text-green-500 mt-2">Message sent successfully!</p>
              )}
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
