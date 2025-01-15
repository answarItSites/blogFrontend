import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AllBlogDetials = () => {
    const [blogDetails, setBlogDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await axios.get(`/api/blogs/${id}`);
                setBlogDetails(response.data.data);
            } catch (error) {
                console.error('Error fetching blog details:', error);
            }
        };

        fetchBlogDetails();
    }, [id]);

    if (!blogDetails) return <div>Loading...</div>;
    
    return (
        <div>
        <h1>{blogDetails.title}</h1>
        <p>{blogDetails.shortDescription}</p>
        <img src={blogDetails.thumbnail} alt={blogDetails.title} />
        <p>Department: {blogDetails.department}</p>
        <p>Created At: {new Date(blogDetails.createdAt).toLocaleDateString()}</p>
    </div>
    );
};

export default AllBlogDetials;