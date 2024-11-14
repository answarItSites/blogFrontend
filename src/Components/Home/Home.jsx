import TopBanner from "../BannerSection/TopBnner/TopBanner";
import BlockSection from "../AllBlog/TopBlogSection/TopBlogSection";
import HealthyEatingSection from "../AllBlog/HealthyEatingBlog/HealthyEating";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import VideoSection from "../VideoSection/VideoSection";
import MealsBlogSection from './../AllBlog/MealsBlogSection/MealsBlogSection';
import SpecialDietsBlog from './../AllBlog/SpecialDietsBlog/SpecialDietsBlog';
import FoodFreedomBlog from './../AllBlog/FoodFreedomBlog/FoodFreedomBlog';
import ConditionsBlog from './../AllBlog/ConditionsBlog/ConditionsBlog';
import FeelGoodFoodBlog from './../AllBlog/FeelGoodFoodBlog/FeelGoodFoodBlog';
import VitaminsSupplementsBlog from './../AllBlog/VitaminsSupplementsBlog/VitaminsSupplementsBlog';
import SustainBlog from './../AllBlog/SustainBlog/SustainBlog';


const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <BlockSection/>
            <VideoSection/>          
            <MealsBlogSection/>
            <SpecialDietsBlog/>
            <HealthyEatingSection/>
            <FoodFreedomBlog/>
            <ConditionsBlog/>
            <FeelGoodFoodBlog/>
            <VitaminsSupplementsBlog/>
            <SustainBlog/>
            <Footer/>
        </div>
    );
};

export default Home;