import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post("http://localhost:5002/api/login", formData);
    //         if (response.data.success) {
    //             toast.success("✅ login successful!", { position: "top-center" });
    //             navigate("/dashboard/login"); // Redirect to login page after success
    //         } else {
    //             toast.error(response.data.message, { position: "top-center" });
    //         }
    //     } catch (error) {
    //         toast.error("❌ Signup failed. Try again.", { position: "top-center" });
    //         console.error("Signup error:", error);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5002/api/login", formData);
            if (response.data.success) {
                localStorage.setItem("token", response.data.token); // Store token
                toast.success("✅ Login successful!", { position: "top-center" });
                navigate("/dashboard"); // Redirect to main dashboard page
            } else {
                toast.error(response.data.message, { position: "top-center" });
            }
        } catch (error) {
            toast.error("❌ Login failed. Try again.", { position: "top-center" });
            console.error("Login error:", error);
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 border rounded-md text-lg"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-4 border rounded-md text-lg"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {/* <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Role</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-4 border rounded-md bg-white text-lg"
                        >
                            <option value="admin">Admin</option>
                            <option value="editor">Editor</option>
                            <option value="superAdmin">SuperAdmin</option>
                        </select>
                    </div> */}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors text-lg"
                >
                    Log In
                </button>
            </form>
        </div>
    );
};

export default Login;