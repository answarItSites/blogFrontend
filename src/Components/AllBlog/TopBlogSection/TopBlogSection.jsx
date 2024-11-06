

// const BlockSection = () => {
//   return (
//     <section className="bg-white text-gray-800 py-12 mt-5">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
//           {/* Left Section */}
//           <div className="flex flex-col space-y-4">
//             <img
//               src="https://via.placeholder.com/500x300"
//               alt="Main Image"
//               className="rounded-md"
//             />
//             <h2 className="text-2xl font-semibold text-[#34d399]">
//               <a href="/" className="hover:text-[#2563eb] transition-colors duration-300">
//                 Left Section Title
//               </a>
//             </h2>
//           </div>
          
//           {/* Right Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Image 1 */}
//             <div className="flex flex-col space-y-4">
//               <img
//                 src="https://via.placeholder.com/200x150"
//                 alt="Image 1"
//                 className="rounded-md"
//               />
//               <h3 className="text-xl font-semibold">
//                 <a href="/" className="hover:text-[#2563eb] transition-colors duration-300">
//                   Image 1 Title
//                 </a>
//               </h3>
//             </div>

//             {/* Image 2 */}
//             <div className="flex flex-col space-y-4">
//               <img
//                 src="https://via.placeholder.com/200x150"
//                 alt="Image 2"
//                 className="rounded-md"
//               />
//               <h3 className="text-xl font-semibold">
//                 <a href="/" className="hover:text-[#2563eb] transition-colors duration-300">
//                   Image 2 Title
//                 </a>
//               </h3>
//             </div>

//             {/* Image 3 */}
//             <div className="flex flex-col space-y-4">
//               <img
//                 src="https://via.placeholder.com/200x150"
//                 alt="Image 3"
//                 className="rounded-md"
//               />
//               <h3 className="text-xl font-semibold">
//                 <a href="/" className="hover:text-[#2563eb] transition-colors duration-300">
//                   Image 3 Title
//                 </a>
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlockSection;



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
          <Link to={`blog/1`}>
          <img
            src={featuredData.image}
            alt="Featured large"
            className="w-full h-64 object-cover rounded-md"
          /></Link>
          <Link
            to={`blog/1`}
            className="text-xl font-bold mt-4 block transition-colors duration-300 hover:text-green-600"
          >
            {featuredData.title}
          </Link>
          <p className="mt-2 text-gray-600">{featuredData.description}</p>
        </div>

        {/* Right Section (Horizontally Aligned Articles) */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          {articlesData.map((article, index) => (
            <Link to={`blog/2`} key={index} className="flex items-center space-x-4">
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

