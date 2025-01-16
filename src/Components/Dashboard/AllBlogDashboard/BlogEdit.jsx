import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [subDepartment, setSubDepartment] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  
  const editor = useRef(null);
  const editorContentRef = useRef("");

  const config = {
    readonly: false,
    placeholder: "Start typing...",
    toolbarButtonSize: "small",
    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "eraser",
      "ul",
      "ol",
      "outdent",
      "indent",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "align",
      "undo",
      "redo",
      "cut",
      "copy",
      "paste",
      "hr",
      "link",
      "unlink",
    ],
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5002/api/postArticle/${id}`);
      
      if (response.data.success) {
        const blog = response.data.data;
        setTitle(blog.title);
        setShortDescription(blog.shortDescription);
        setDescription(blog.description);
        setDepartment(blog.department);
        setSubDepartment(blog.subDepartment || "");
        setImageUrl(blog.thumbnail);
        editorContentRef.current = blog.description;
      } else {
        toast.error("Failed to fetch blog data");
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      toast.error(error.response?.data?.message || "Error fetching blog");
      navigate('/blogList'); // Redirect to blog list on error
    } finally {
      setLoading(false);
    }
  };

  const handleEditorChange = useCallback((newContent) => {
    editorContentRef.current = newContent;
  }, []);

  const handleEditorBlur = () => {
    setDescription(editorContentRef.current);
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartment(selectedDepartment);
    if (selectedDepartment === "Meal Kits") {
      setSubDepartment("Overview");
    } else {
      setSubDepartment("");
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "blog_preset");

      const loadingToast = toast.loading("📤 Uploading image...", {
        position: "top-center",
        style: { backgroundColor: '#2196f3' }
      });

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqexj7isi/image/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.dismiss(loadingToast);
      const uploadedImageUrl = response.data.secure_url;
      setImageUrl(uploadedImageUrl);

      toast.success("🖼️ Image updated successfully!", {
        position: "top-center",
        style: { backgroundColor: '#4caf50' }
      });
    } catch (error) {
      toast.error("❌ Error uploading image", {
        position: "top-center",
        style: { backgroundColor: '#f44336' }
      });
      console.error("Upload error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !shortDescription.trim() || !description.trim() || !department || !imageUrl) {
      toast.error("Please fill all required fields", {
        position: "top-center",
        style: { backgroundColor: '#f44336' }
      });
      return;
    }

    try {
      const loadingToast = toast.loading("🚀 Updating blog post...", {
        position: "top-center",
        style: { backgroundColor: '#2196f3' }
      });

      const updatedBlog = {
        title: title.trim(),
        shortDescription: shortDescription.trim(),
        description: description.trim(),
        department,
        subDepartment: subDepartment || "",
        thumbnail: imageUrl,
      };

      const response = await axios.put(
        `http://localhost:5002/api/postArticle/${id}`,
        updatedBlog
      );

      toast.dismiss(loadingToast);

      if (response.data.success) {
        toast.success("✨ Blog updated successfully!", {
          position: "top-center",
          icon: "🎉",
          style: { backgroundColor: '#4caf50' }
        });
        navigate('/blogList');
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "❌ Failed to update blog",
        {
          position: "top-center",
          style: { backgroundColor: '#f44336' }
        }
      );
      console.error("Update error:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Short Description
              <span className="text-gray-500 text-xs ml-2">(Brief summary for preview)</span>
            </label>
            <textarea
              className="w-full p-2 border rounded-md resize-y min-h-[100px]"
              placeholder="Enter a short description for the blog preview..."
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              maxLength={200}
            />
            <p className="text-sm text-gray-500 mt-1">
              {shortDescription?.length}/200 characters
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Department</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={department}
              onChange={handleDepartmentChange}
            >
              <option value="">Select Department</option>
              <option value="Meal Kits">Meal Kits</option>
              <option value="Special Diets">Special Diets</option>
              <option value="Healthy Eating">Healthy Eating</option>
              <option value="Food Freedom">Food Freedom</option>
              <option value="Conditions">Conditions</option>
              <option value="Feel Good Food">Feel Good Food</option>
              <option value="Products">Products</option>
              <option value="Vitamins & Supplements">Vitamins & Supplements</option>
              <option value="Sustain">Sustain</option>
            </select>
          </div>

          {department === "Meal Kits" && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Sub-Department
              </label>
              <select
                className="w-full p-2 border rounded-md bg-white"
                value={subDepartment}
                onChange={(e) => setSubDepartment(e.target.value)}
              >
                <option value="">Select Sub-Department</option>
                <option value="Overview">Overview</option>
                <option value="Diets">Diets</option>
                <option value="Meal Kits">Meal Kits</option>
                <option value="Prepared Meals">Prepared Meals</option>
                <option value="Comparisons">Comparisons</option>
                <option value="Grocery Delivery">Grocery Delivery</option>
              </select>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded-md"
              onChange={handleImageChange}
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Blog thumbnail"
                className="mt-2 max-w-xs rounded"
              />
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <JoditEditor
              ref={editor}
              value={editorContentRef.current}
              config={config}
              onBlur={handleEditorBlur}
              onChange={handleEditorChange}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => navigate('/blogList')}
            className="w-1/2 bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Update Blog
          </button>
        </div>
      </form>
    </div>
      <Footer/>
    </div>
  );
};

export default BlogEdit;