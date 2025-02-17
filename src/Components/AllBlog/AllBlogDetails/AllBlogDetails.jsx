import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const AllBlogDetails = () => {
  const { blogId } = useParams();
  console.log(blogId);

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogDetails();
  }, [blogId]);

  const fetchBlogDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5002/api/blogDetails/${blogId}`
      );
      setBlog(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching blog details");
      console.error("Fetch error:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">Blog not found</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
        >
          {blog.title}
        </motion.h1>

        {/* <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md mb-6"
        /> */}

        <p className="text-lg text-gray-600 mb-4 text-center">
          {blog.shortDescription}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default AllBlogDetails;
