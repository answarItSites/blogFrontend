import React from 'react';
import { Link } from 'react-router-dom';

// Sample data to demonstrate dynamic content
const featuredData = {
  image: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706100/8_xueuco.jpg",
  title: "Eat It or Leave It? A Comprehensive Ingredient Dictionary to Simplify Your Shopping Trip",
  description: "Get grocery shopping savvy with Healthline's A-Z ingredients dictionary.",
  link: "#"
};

const articlesData = [
  {
    image: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706106/2_v6qecg.jpg",
    title: "Healthy Eating Refresh: Letter from the Editor",
    description: "At Healthline Nutrition, we want to help you eat food that makes you feel good...",
    link: "#"
  },
  {
    image: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706100/6_dkwswe.jpg",
    title: "Get Your Vitamin P: Why Pleasure Matters When It Comes to What You Eat",
    description: "Vitamin P (for pleasure) matters too...",
    link: "#"
  },
  {
    image: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706106/2_v6qecg.jpg",
    title: "10 Ways to Lower Your Grocery Bill as Prices Increase",
    description: "Keep some of these strategies in mind when grocery shopping...",
    link: "#"
  },
];



const BlockSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">FEATURED</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Section (Large Image with Title and Description) */}
        <div className="lg:col-span-2">
          <Link to={`Feature/1`}>
          <img
            src={featuredData.image}
            alt="Featured large"
            className="w-full h-64 object-cover rounded-md"
          /></Link>
          <Link
            to={`Feature/1`}
            className="text-xl font-bold mt-4 block transition-colors duration-300 hover:text-green-600"
          >
            {featuredData.title}
          </Link>
          <p className="mt-2 text-gray-600">{featuredData.description}</p>
        </div>

        {/* Right Section (Horizontally Aligned Articles) */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          {articlesData.map((article, index) => (
            <Link to={`Feature/2`} key={index} className="flex items-center space-x-4">
              <img
                src={article.image}
                alt="Article"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <a href={article.link} className="font-bold transition-colors duration-300 hover:text-green-600">
                  {article.title}
                </a>
                <p className="text-sm text-gray-600">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>



  );
};

export default BlockSection;

