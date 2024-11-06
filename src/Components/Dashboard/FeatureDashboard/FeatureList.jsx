import axios from 'axios';
import  {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TopBlogList = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTopBlogs();
  }, []);

  const fetchTopBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/v1/top-blogs');
      if (response.data.success) {
        setBlogs(response.data.data);
      }
    } catch (error) {
      toast.error('Error fetching top blogs');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const response = await axios.delete(`http://localhost:5000/api/v1/top-blogs/${id}`);
        if (response.data.success) {
          toast.success('Blog deleted successfully');
          fetchTopBlogs(); // Refresh the list
        }
      } catch (error) {
        toast.error('Error deleting blog');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Top Blogs</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="border px-4 py-2">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="border px-4 py-2">{blog.title}</td>
                <td className="border px-4 py-2">{blog.description}</td>
                <td className="border px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(blog.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TopBlogList;