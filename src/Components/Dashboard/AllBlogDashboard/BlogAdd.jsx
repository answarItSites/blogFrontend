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
  const editor = useRef(null);

  const editorContentRef = useRef(subDepartment);

  const handleEditorChange = useCallback((newContent) => {
    editorContentRef.current = newContent;
  }, []);

  const handleEditorBlur = () => {
    setDescription(editorContentRef.current);
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
    e.preventDefault(); // Prevent default form submission
    // Create the article object in the desired structure
    const article = {
      title,
      description,
      department,
      subDepartment,
      thumbnail: imageUrl, // Use the uploaded image URL
    };
    console.log(article);

    // Send data to backend
    try {
      await axios.post("YOUR_BACKEND_URL", article);
      toast.success("Blog added successfully");
    } catch (error) {
      toast.error("Error adding blog");
      console.error("Submission error:", error);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "blog_preset");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqexj7isi/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const uploadedImageUrl = response.data.secure_url;
      console.log(uploadedImageUrl, "imageUrl");

      setImageUrl(uploadedImageUrl); // Set the image URL state

      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error("Error uploading image");
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add Blogs</h1>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {" "}
        {/* Add onSubmit handler */}
        <div className="p-6 border rounded-lg bg-gray-50">
          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Enter blog title"
              value={title} // Bind title state
              onChange={(e) => setTitle(e.target.value)} // Update title state
            />
          </div>

          {/* Department Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Department</label>
            <select
              className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={department} // Bind department state
              onChange={handleDepartmentChange} // Update department state
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

          {/* Sub-Department Input (conditionally rendered) */}
          {department === "Meal Kits" && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Sub-Department
              </label>
              <select
                className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={subDepartment} // Bind sub-department state
                onChange={(e) => setSubDepartment(e.target.value)} // Update sub-department state
              >
                <option value="">Select Sub-Department</option>

                <>
                  <option value="Overview">Overview</option>
                  <option value="Diets">Diets</option>
                  <option value="Meal Kits">Meal Kits</option>
                  <option value="Prepared Meals">Prepared Meals</option>
                  <option value="Comparisons">Comparisons</option>
                  <option value="Grocery Delivery">Grocery Delivery</option>
                </>
              </select>
            </div>
          )}

          {/* Image Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded-md"
              onChange={handleImageChange} // Handle image change
            />
          </div>

         

          <JoditEditor
              ref={editor}
              value={editorContentRef.current}
              config={config}
              tabIndex={1}
              onBlur={handleEditorBlur}
              onChange={handleEditorChange}
            />
        </div>
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

export default BLogAdd;
