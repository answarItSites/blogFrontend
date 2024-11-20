import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5002/api/postArticle");
      setBlogs(response.data.data);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching blogs");
      console.error("Fetch error:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`http://localhost:5002/api/postArticle/${id}`);
        toast.success("Blog deleted successfully");
        fetchBlogs(); // Refresh the list
      } catch (error) {
        toast.error("Error deleting blog");
        console.error("Delete error:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Blog List</h1>
            <a
              href="/blogAdd"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add New Blog
            </a>
          </div>
          
          {blogs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">No blogs found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                    <p className="text-gray-600 mb-2">
                      Department: {blog.department}
                      {blog.subDepartment && ` / ${blog.subDepartment}`}
                    </p>
                    <div className="text-gray-500 mb-4 line-clamp-3">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: blog.description.substring(0, 150) + "...",
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                      <div className="space-x-2">
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => window.location.href = `/edit-blog/${blog._id}`}
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;