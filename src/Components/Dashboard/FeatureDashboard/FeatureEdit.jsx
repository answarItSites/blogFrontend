import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';

const TopBlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);

  const config = {
    readonly: false,
    height: 400
  };

  useEffect(() => {
    fetchBlogById();
  }, [id]);

  const fetchBlogById = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/v1/top-blogs/${id}`);
      if (response.data.success) {
        setSections(response.data.data.sections);
      }
    } catch (error) {
      toast.error('Error fetching blog');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTitleChange = (e, index) => {
    const updatedSections = [...sections];
    updatedSections[index].title = e.target.value;
    setSections(updatedSections);
  };

  const handleImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'your_cloudinary_upload_preset');

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
          formData
        );
        const updatedSections = [...sections];
        updatedSections[index].image = response.data.secure_url;
        setSections(updatedSections);
      } catch (error) {
        toast.error('Error uploading image');
        console.error('Error:', error);
      }
    }
  };

  const handleDescriptionChange = (newContent, index) => {
    const updatedSections = [...sections];
    updatedSections[index].description = newContent;
    setSections(updatedSections);
  };

  const addNewSection = () => {
    setSections([...sections, {
      id: Date.now(),
      title: '',
      image: '',
      description: ''
    }]);
  };

  const removeSection = (index) => {
    const updatedSections = sections.filter((_, idx) => idx !== index);
    setSections(updatedSections);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/v1/top-blogs/${id}`, {
        sections
      });
      if (response.data.success) {
        toast.success('Blog updated successfully');
        navigate('/');
      }
    } catch (error) {
      toast.error('Error updating blog');
      console.error('Error:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit HealthyEating Blog</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {sections.map((section, index) => (
          <div key={section.id} className="p-6 border rounded-lg bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Section {index + 1}</h2>
              {sections.length > 1 && (
                <button 
                  type="button"
                  onClick={() => removeSection(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove Section
                </button>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={section.title}
                onChange={(e) => handleTitleChange(e, index)}
                className="w-full p-2 border rounded-md"
                placeholder="Enter blog title"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Image</label>
              <input
                type="file"
                onChange={(e) => handleImageChange(e, index)}
                accept="image/*"
                className="w-full p-2 border rounded-md"
              />
              {section.image && (
                <img 
                  src={section.image} 
                  alt="Preview" 
                  className="mt-2 max-w-xs rounded"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <JoditEditor
                key={section.id}
                value={section.description}
                config={config}
                onBlur={(newContent) => handleDescriptionChange(newContent, index)}
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addNewSection}
          className="w-full bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors mb-4"
        >
          Add New Section
        </button>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Update All Sections
        </button>
      </form>
    </div>
  );
};

export default TopBlogEdit;