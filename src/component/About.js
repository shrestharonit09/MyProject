import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
      <p className="text-base md:text-lg mb-4">
        Welcome to our versatile information platform! Our project is crafted to provide you with the latest news from various countries worldwide, along with a convenient tool for generating ID cards. Whether you want to stay updated on global events or create a professional ID card for personal or business purposes, our platform has you covered.
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Key Features</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Global News:</strong> Stay informed with up-to-the-minute news updates from different countries. Our system aggregates news from reliable sources, ensuring you always have access to current events worldwide.
        </li>
        <li>
          <strong>ID Card Generator:</strong> Quickly and easily create customized ID cards. Our ID card generator allows you to input essential information and design personalized ID cards for various purposes.
        </li>
        <li>
          <strong>User-Friendly Interface:</strong> Our platform is designed with a focus on usability, ensuring an intuitive experience that makes accessing news and generating ID cards simple and efficient.
        </li>
      </ul>
      <p className="text-base md:text-lg">
        We are dedicated to providing you with accurate information and accessible tools to meet your needs. Thank you for choosing our platform!
      </p>
    </div>
  );
};

export default About;
