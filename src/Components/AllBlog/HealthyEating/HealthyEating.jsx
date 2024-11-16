import { Link } from "react-router-dom";

const HealthyEating = () => {
  const articles = [
    {
      title: "15 Staple Foods to Make Healthy Eating Easy All Week Long",
      description: "Here's how to always have something to make for dinner.",
      thumbnail: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706106/2_v6qecg.jpg",
      link: "#"
    },
    {
      title: "The Definitive Guide to Healthy Eating in Real Life",
      description: "You may hear a lot of talk about how to eat healthy, but getting started is another matter.",
      thumbnail: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706100/8_xueuco.jpg", // Replace with actual image path
      link: "#"
    },
    {
      title: "How to Stock Your Pantry for Quick & Easy Meals in Minutes",
      description: "You'll be eating in no time.",
      thumbnail: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706100/6_dkwswe.jpg", // Replace with actual image path
      link: "#"
    },
    {
      title: "Plant-based Protein: The Best, the Worst, and Everything In Between",
      description: "The pros, the cons, and how to get started.",
      thumbnail: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706099/4_bo5qby.jpg", // Replace with actual image path
      link: "#"
    },
    {
      title: "The Definitive Guide to Healthy Grocery Shopping",
      description: "It can be hard to figure out what to buy in supermarkets when you're trying to eat...",
      thumbnail: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706099/4_bo5qby.jpg", // Replace with actual image path
      link: "#"
    },
    {
      title: "Try it or Toss it? The Supplements You Need and the Ones You Can Skip",
      description: "Overwhelmed by the supplement aisle? Get the facts on which ones are worth it.",
      thumbnail: "https://res.cloudinary.com/dtixzwuqt/image/upload/v1729706100/6_dkwswe.jpg", // Replace with actual image path
      link: "#"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200">HEALTHY EATING IRL</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {articles.map((article, index) => (
          <Link
            to={`healthy-eating/2`}
            key={index}
            className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 transition-transform transform hover:scale-105 hover:bg-gray-100 p-4 rounded-lg"
          >
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold hover:text-green-600 transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-base">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HealthyEating;




