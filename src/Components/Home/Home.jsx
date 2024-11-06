import TopBanner from "../BannerSection/TopBnner/TopBanner";
import Blogs from "../AllBlog/Blogs/Blogs";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import VideoSection from "../VideoSection/VideoSection";
import FeatureSection from "../AllBlog/FeatureSection/FeatureSection"


const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <FeatureSection/>
            <VideoSection/>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default Home;