import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ConditionsBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConditionsBlogs();
  }, []);

  const fetchConditionsBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5002/api/postArticle?department=Conditions"
      );
      setBlogs(response.data.data);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching Conditions blogs");
      console.error("Fetch error:", error);
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200"
        >
          Conditions
        </motion.h2>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200"
        >
          Conditions
        </motion.h2>
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No Conditions blogs found</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200"
    >
      Conditions
    </motion.h2>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {blogs.map((blog) => (
        <motion.div
          key={blog._id}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <Link to={`/allBlogDetails/${blog._id}`}>
            <motion.div
              className="relative w-full h-56 md:h-48 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {blog.shortDescription}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <motion.span
                  className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Read more →
                </motion.span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </section>
  );
};

export default ConditionsBlog;

