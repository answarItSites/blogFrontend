import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedSubDepartment, setSelectedSubDepartment] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [cache, setCache] = useState({});
  const observer = useRef();
  const blogsPerPage = 9;

  // Departments and SubDepartments (memoized)
  const departments = [
    "all",
    "Meal Kits",
    "Special Diets",
    "Healthy Eating",
    "Food Freedom",
    "Conditions",
    "Feel Good Food",
    "Products",
    "Vitamins & Supplements"
  ];

  const subDepartments = {
    "Meal Kits": [
      "Overview",
      "Diets",
      "Meal Kits",
      "Prepared Meals",
      "Comparisons",
      "Grocery Delivery"
    ]
  };

  // Intersection Observer for Infinite Scroll
  const lastBlogElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // Memoized fetch function
  const fetchBlogs = useCallback(async (pageNum) => {
    try {
      setLoading(true);
      
      // Create cache key
      const cacheKey = `${selectedDepartment}-${selectedSubDepartment}-${pageNum}`;
      
      // Check cache first
      if (cache[cacheKey]) {
        if (pageNum === 1) {
          setBlogs(cache[cacheKey]);
        } else {
          setBlogs(prev => [...prev, ...cache[cacheKey]]);
        }
        setLoading(false);
        return;
      }

      let url = `http://localhost:5002/api/postArticle?page=${pageNum}&limit=${blogsPerPage}`;
      
      if (selectedDepartment !== "all") {
        url += `&department=${selectedDepartment}`;
        if (selectedSubDepartment) {
          url += `&subDepartment=${selectedSubDepartment}`;
        }
      }

      const response = await axios.get(url);
      const newBlogs = response.data.data;
      
      // Update cache
      setCache(prev => ({
        ...prev,
        [cacheKey]: newBlogs
      }));

      if (pageNum === 1) {
        setBlogs(newBlogs);
      } else {
        setBlogs(prev => [...prev, ...newBlogs]);
      }
      
      setHasMore(newBlogs.length === blogsPerPage);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching blogs");
      console.error("Fetch error:", error);
      setLoading(false);
    }
  }, [selectedDepartment, selectedSubDepartment, cache]);

  // Reset and fetch when filters change
  useEffect(() => {
    setPage(1);
    setBlogs([]);
    setHasMore(true);
    fetchBlogs(1);
  }, [selectedDepartment, selectedSubDepartment, fetchBlogs]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchBlogs(nextPage);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`http://localhost:5002/api/postArticle/${id}`);
        toast.success("Blog deleted successfully");
        // Clear cache after deletion
        setCache({});
        fetchBlogs(1);
      } catch (error) {
        toast.error("Error deleting blog");
        console.error("Delete error:", error);
      }
    }
  };

  // Add truncateText function
  const truncateText = (text, wordCount) => {
    if (!text) return "";
    const words = text.split(' ');
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...';
    }
    return text;
  };

  // Add handleDepartmentChange function
  const handleDepartmentChange = (dept) => {
    setSelectedDepartment(dept);
    setSelectedSubDepartment("");
  };

  // Define LazyImage component with PropTypes
  const LazyImage = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    return (
      <div className="relative w-full h-48">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={src}
          alt={alt}
          className={`w-full h-48 object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  };

  // Add PropTypes validation
  LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  // Rest of your JSX remains the same, but update the image rendering to use LazyImage
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header and Add Button */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Blog List</h1>
            {/* <a
              href="/blogAdd"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add New Blog
            </a> */}
          </div>

          {/* Department Filters */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => handleDepartmentChange(dept)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedDepartment === dept
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Sub-department filters for Meal Kits */}
            {selectedDepartment === "Meal Kits" && (
              <div className="flex flex-wrap gap-2">
                {subDepartments["Meal Kits"].map((subDept) => (
                  <button
                    key={subDept}
                    onClick={() => setSelectedSubDepartment(subDept)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedSubDepartment === subDept
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {subDept}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Blog Grid */}
          {blogs.length === 0 && !loading ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">No blogs found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <div
                  key={blog._id}
                  ref={index === blogs.length - 1 ? lastBlogElementRef : null}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <LazyImage src={blog.thumbnail} alt={blog.title} />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                    <p className="text-gray-600 mb-2">
                      Department: {blog.department}
                      {blog.subDepartment && ` / ${blog.subDepartment}`}
                    </p>
                    <p className="text-gray-500 mb-4 text-sm line-clamp-2">
                      {truncateText(blog.shortDescription, 25)}
                    </p>
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
     
    </div>
  );
};

export default BlogList;