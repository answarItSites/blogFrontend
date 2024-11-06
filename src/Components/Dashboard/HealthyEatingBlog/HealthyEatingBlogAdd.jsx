import { useState } from 'react';
import JoditEditor from 'jodit-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const HealthyEatingBLogAdd = () => {
  const [sections, setSections] = useState([{
    id: 1,
    title: '',
    image: null,
    description: ''
  }]);

  console.log(sections, 'sections');
  
  // Config for JoditEditor
  const config = {
    readonly: false,
    height: 400,
    buttons: [
      'source', '|',
      'bold', 'italic', 'underline', '|', 
      'ul', 'ol', '|',
      'font', 'fontsize', 'paragraph', '|',
      'link', 'image_url', 'video_url', 'table', '|',
      'left', 'center', 'right', 'justify', '|',
      'undo', 'redo', '|',
      'hr', 'eraser', 'fullsize'
    ],
    iframe: true,
    spellcheck: false,
    useSearch: false,
    beautifyHTML: false,
  };

  const handleImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'blog_preset');
        
        const response = await axios.post('https://api.cloudinary.com/v1_1/dqexj7isi/image/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const imageUrl = response.data.secure_url;
        console.log(imageUrl,'imageUrl');
        
        const newSections = [...sections];
        newSections[index].image = imageUrl;
        setSections(newSections);
        
        toast.success('Image uploaded successfully');
      } catch (error) {
        toast.error('Error uploading image');
        console.error('Upload error:', error);
      }
    } else {
      toast.error('Please select a valid image file');
    }
  };

  const handleTitleChange = (e, index) => {
    const newSections = [...sections];
    newSections[index].title = e.target.value;
    setSections(newSections);
  };

  const handleDescriptionChange = (newContent, index) => {
    const newSections = [...sections];
    newSections[index].description = newContent;
    setSections(newSections);
  };

  const addNewSection = () => {
    setSections([...sections, {
      id: sections.length + 1,
      title: '',
      image: null,
      description: ''
    }]);
  };

  const removeSection = (index) => {
    if (sections.length > 1) {
      const newSections = sections.filter((_, i) => i !== index);
      setSections(newSections);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = sections.every(section => 
      section.title && section.image && section.description
    );

    if (!isValid) {
      toast.error('Please fill in all fields in every section');
      return;
    }

    try {
      const formData = new FormData();
      
      formData.append('totalSections', sections.length);
      
      sections.forEach((section, index) => {
        console.log(`Section ${index}:`, section);
        formData.append(`title${index}`, section.title);
        formData.append(`image${index}`, section.image);
        formData.append(`description${index}`, section.description);
      });

      const response = await axios.post('http://localhost:5000/api/v1/top-blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        toast.success('Blog posts added successfully');
        setSections([{
          id: 1,
          title: '',
          image: null,
          description: ''
        }]);
      } else {
        toast.error('Failed to add blog posts');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error adding blog posts');
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add HealthyEating Blog</h1>
      
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

            {/* Title Input */}
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

            {/* Image Input */}
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

            {/* Description with JoditEditor */}
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <JoditEditor
                key={section.id}
                value={section.description}
                config={config}
                onBlur={(newContent) => handleDescriptionChange(newContent, index)} // Using onBlur
              />
            </div>
          </div>
        ))}

        {/* Add Section Button */}
        <button
          type="button"
          onClick={addNewSection}
          className="w-full bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors mb-4"
        >
          Add New Section
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit All Sections
        </button>
      </form>
    </div>
  );
};

export default HealthyEatingBLogAdd;
