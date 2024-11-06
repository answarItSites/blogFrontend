import TopBanner from "../BannerSection/TopBnner/TopBanner";
import BlockSection from "../AllBlog/TopBlogSection/TopBlogSection";
import HealthyEatingSection from "../AllBlog/HealthyEatingBlog/HealthyEating";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import VideoSection from "../VideoSection/VideoSection";


const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <BlockSection/>
            <VideoSection/>
            <HealthyEatingSection/>
            <Footer/>
        </div>
    );
};

export default Home;