import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import FeatureSectionDetails from './Components/AllBlog/FeatureSection/FeatureSectionDetails';
import FeatureEdit from './Components/Dashboard/FeatureDashboard/FeatureEdit';
import BlogAdd from './Components/Dashboard/AllBlogDashboard/BlogAdd';
import BlogList from './Components/Dashboard/AllBlogDashboard/BlogList';
import BlogEdit from './Components/Dashboard/AllBlogDashboard/BlogEdit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllBlogDetials from './Components/DetailsBlog/AllblogDetials/AllBlogDetials';
import SustainBlog from './Components/AllBlog/SustainBlog/SustainBlog';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Feature/:id" element={<FeatureSectionDetails />} />
          <Route path="/FeatureEdit" element={<FeatureEdit />} />
          <Route path="/blogAdd" element={<BlogAdd />} />
          <Route path="/blogList" element={<BlogList />} />
          <Route path="/edit-blog/:id" element={<BlogEdit />} />
          <Route path="/allBlogDetials:id" element={AllBlogDetials}/>
          <Route path="/sustain" element={<SustainBlog />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={3}
        style={{
          fontSize: '16px',
          fontWeight: '500',
          textAlign: 'center',
          width: 'auto',
          minWidth: '300px'
        }}
        toastStyle={{
          background: '#333',
          color: '#fff',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      />
    </Router>
  );
};

export default App;