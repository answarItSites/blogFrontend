import React from 'react';

const data = [{
  title: "The Ultimate Guide to Healthy Eating",
  image: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706106/2_v6qecg.jpg",
  content: "Healthy eating doesn't have to be complicated. The key is to focus on whole, " +
    "nutrient-dense foods that nourish your body and make you feel good. Start by incorporating " +
    "more fruits, vegetables, lean proteins, and whole grains into your diet. Remember to stay " + 
    "hydrated and listen to your body's hunger and fullness cues."
}];

const DetailsBlogSection = () => {
  return (
    <div>
      {data.map((blog, index) => (
        <div key={index} className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">{blog.title}</h1>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <p className="text-lg leading-relaxed text-gray-700">
            {blog.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DetailsBlogSection;