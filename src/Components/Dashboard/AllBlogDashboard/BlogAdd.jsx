import { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import JoditEditor from "jodit-react";

const BLogAdd = () => {
  const [title, setTitle] = useState(""); // State for title
  const [description, setDescription] = useState(""); // State for description
  const [department, setDepartment] = useState(""); // State for department
  const [subDepartment, setSubDepartment] = useState(""); // State for sub-department
  const [imageUrl, setImageUrl] = useState(""); // State for image URL
  const [shortDescription, setShortDescription] = useState("");
  const editor = useRef(null);

  const editorContentRef = useRef(subDepartment);

  const handleEditorChange = useCallback((newContent) => {
    editorContentRef.current = newContent;
    console.log("Editor content changed:", newContent); // Debug log
  }, []);

  const handleEditorBlur = () => {
    const content = editorContentRef.current;
    if (content !== undefined && content !== null) {
      setDescription(content);
      console.log("Description set to:", content); // Debug log
    }
  };

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


  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartment(selectedDepartment);
    // Update sub-department options based on selected department
    if (selectedDepartment === "Meal Kits") {
      setSubDepartment("Overview"); // Example of setting a default sub-department
    } else {
      setSubDepartment(""); // Reset if not Meal Kits
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate data before sending
    if (!title.trim()) {
      toast.error("📝 Title is required", {
        position: "top-center",
        style: {
          backgroundColor: '#f44336',
        }
      });
      return;
    }

    if (!description.trim()) {
      toast.error("📝 Description is required", {
        position: "top-center",
        style: {
          backgroundColor: '#f44336',
        }
      });
      return;
    }

    if (!department) {
      toast.error("📁 Department is required", {
        position: "top-center",
        style: {
          backgroundColor: '#f44336',
        }
      });
      return;
    }

    if (!imageUrl) {
      toast.error("🖼️ Please upload an image", {
        position: "top-center",
        style: {
          backgroundColor: '#f44336',
        }
      });
      return;
    }

    if (!shortDescription.trim()) {
      toast.error("📝 Short description is required", {
        position: "top-center",
        style: {
          backgroundColor: '#f44336',
        }
      });
      return;
    }

    const article = {
      title: title.trim(),
      shortDescription: shortDescription.trim(),
      description: description.trim(),
      department,
      subDepartment: subDepartment || "",
      thumbnail: imageUrl,
    };

    try {
      // Show loading toast
      const loadingToast = toast.loading("🚀 Saving blog post...", {
        position: "top-center",
        style: {
          backgroundColor: '#2196f3',
        }
      });

      const response = await axios.post("http://localhost:5002/api/postArticle", article);
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (response.data.success) {
        toast.success("✨ Blog post created successfully!", {
          position: "top-center",
          icon: "🎉",
          style: {
            backgroundColor: '#4caf50',
          }
        });

        // Clear all form fields
        setTitle("");
        setDescription("");
        setDepartment("");
        setSubDepartment("");
        setImageUrl("");
        setShortDescription(""); // Clear short description
        editorContentRef.current = ""; // Clear editor content reference
        
        // Reset the Jodit editor
        if (editor.current) {
          editor.current.value = "";
        }

        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = "";
        }

        // Reset select elements to default
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
          select.value = "";
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || 
        "❌ Failed to create blog post. Please try again.", {
          position: "top-center",
          style: {
            backgroundColor: '#f44336',
          }
        }
      );
      console.error("Error details:", error.response?.data);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "blog_preset");

      // Show loading toast
      const loadingToast = toast.loading("📤 Uploading image...", {
        position: "top-center",
        style: {
          backgroundColor: '#2196f3',
        }
      });

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqexj7isi/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      const uploadedImageUrl = response.data.secure_url;
      setImageUrl(uploadedImageUrl);

      toast.success("🖼️ Image uploaded successfully!", {
        position: "top-center",
        style: {
          backgroundColor: '#4caf50',
        }
      });
    } catch (error) {
      toast.error("❌ Error uploading image", {
        position: "top-center",
        style: {
          backgroundColor: '#f44336',
        }
      });
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50 py-8 flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Add Blogs</h1>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="p-6 border rounded-lg bg-white shadow-sm">
              {/* Title Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  className="w-full p-4 border rounded-md text-lg"
                  placeholder="Enter blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Short Description Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Short Description
                  <span className="text-gray-500 text-xs ml-2">(Brief summary for preview)</span>
                </label>
                <textarea
                  className="w-full p-3 border rounded-md resize-y min-h-[120px] text-lg"
                  placeholder="Enter a short description for the blog preview..."
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  maxLength={200}
                />
                <p className="text-sm text-gray-500 mt-1">
                  {shortDescription.length}/200 characters
                </p>
              </div>

              {/* Department Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Department</label>
                <select
                  className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
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
                  <option value="Vitamins & Supplements">
                    Vitamins & Supplements
                  </option>
                  <option value="Sustain">Sustain</option>
                </select>
              </div>

              {/* Sub-Department Input */}
              {department === "Meal Kits" && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Sub-Department
                  </label>
                  <select
                    className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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

              {/* Image Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-3 border rounded-md text-lg"
                  onChange={handleImageChange}
                />
              </div>

              {/* Editor */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Description</label>
                <JoditEditor
                  ref={editor}
                  value={editorContentRef.current}
                  config={config}
                  tabIndex={1}
                  onBlur={handleEditorBlur}
                  onChange={handleEditorChange}
                  className="text-lg"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors mb-8 text-lg"
            >
              Submit All Sections
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BLogAdd;
