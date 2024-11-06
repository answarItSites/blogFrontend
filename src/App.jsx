import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import DetailsBlogSection from './Components/AllBlog/TopBlogSection/TopDetailsBlogSection';
import DetialsHealtyEating from './Components/AllBlog/HealthyEatingBlog/DetialsHealtyEating';
import TopBlogAdd from './Components/Dashboard/TopBlog/TopBlogAdd';
import HealthyEatingBlogAdd from './Components/Dashboard/HealthyEatingBlog/HealthyEatingBLogAdd';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<DetailsBlogSection />} />
          <Route path="/healthy-eating/:id" element={<DetialsHealtyEating />} />
          {/* dashboard */}
          <Route path="/top-blog-add" element={<TopBlogAdd />} />
          <Route path="/healthy-eating-blog-add" element={<HealthyEatingBlogAdd />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;