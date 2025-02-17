import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import FeatureSectionDetails from "./Components/AllBlog/FeatureSection/FeatureSectionDetails";
import FeatureEdit from "./Components/Dashboard/FeatureDashboard/FeatureEdit";
import BlogAdd from "./Components/Dashboard/AllBlogDashboard/BlogAdd";
import BlogList from "./Components/Dashboard/AllBlogDashboard/BlogList";
import BlogEdit from "./Components/Dashboard/AllBlogDashboard/BlogEdit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SustainBlog from "./Components/AllBlog/SustainBlog/SustainBlog";
import AllBlogDetails from "./Components/AllBlog/AllBlogDetails/AllBlogDetails";
import Dashboard from "./Components/Dashboard/MainDashboard/Dashboard";
import ScrollToTop from "./Components/Shared/ScrollToTop/ScrollToTop";
import Signup from "./Components/Auth/Singup/Signup";
import Login from "./Components/Auth/Login/Login";
import TrackingPage from "./Components/Shared/TrackingPage/TrackingPage";
import PrivateRoute from "./Components/Auth/PrivateRoute/PrivateRoute";

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
          <Route path="/allBlogDetails/:blogId" element={<AllBlogDetails />} />
          <Route path="/sustain" element={<SustainBlog />} />

          {/* PROTECTED DASHBOARD ROUTES */}
          <Route path="/dashboard/*" element={<PrivateRoute />}>
            {/* Redirect to /dashboard/sign-up if no sub-path */}
            <Route index element={<Navigate to="sign-up" />} />

            <Route path="add-blog" element={<BlogAdd />} />
            <Route path="blog-list" element={<BlogList />} />
            <Route path="tracking" element={<TrackingPage />} />

            {/* Signup route under the dashboard */}
            <Route path="sign-up" element={<Signup />} />
          </Route>

          {/* PUBLIC AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
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
          fontSize: "16px",
          fontWeight: "500",
          textAlign: "center",
          width: "auto",
          minWidth: "300px",
        }}
        toastStyle={{
          background: "#333",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
      <ScrollToTop />
    </Router>
  );
};

export default App;
