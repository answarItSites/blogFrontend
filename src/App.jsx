import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import FeatureSectionDetails from './Components/AllBlog/FeatureSection/FeatureSectionDetails';
// import DetialsHealtyEating from './Components/AllBlog/Blogs/BlogDetails';
import FeatureEdit from './Components/Dashboard/FeatureDashboard/FeatureEdit';
import BlogAdd from './Components/Dashboard/AllBlogDashboard/BlogAdd';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Feature/:id" element={<FeatureSectionDetails />} />
          {/* Comment out this route until BlogDetails component is created */}
          {/* <Route path="/BlogDetails/:id" element={<DetialsHealtyEating />} /> */}
          {/* dashboard */}
          <Route path="/FeatureEdit" element={<FeatureEdit />} />
          <Route path="/blogAdd" element={<BlogAdd />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;