import Header from "../Shared/Header/Header";
import VideoSection from "../VideoSection/VideoSection";
import MealsBlogSection from '../AllBlog/MealsBlogSection/MealsBlogSection';
import SpecialDietsBlog from '../AllBlog/SpecialDietsBlog/SpecialDietsBlog';
import HealthyEating from '../AllBlog/HealthyEating/HealthyEating';
import FoodFreedomBlog from '../AllBlog/FoodFreedomBlog/FoodFreedomBlog';
import ConditionsBlog from '../AllBlog/ConditionsBlog/ConditionsBlog';
import FeelGoodFoodBlog from '../AllBlog/FeelGoodFoodBlog/FeelGoodFoodBlog';
import ProductsBlog from '../AllBlog/ProductsBlog/ProductsBlog';
import VitaminsSupplementsBlog from '../AllBlog/VitaminsSupplementsBlog/VitaminsSupplementsBlog';
import SustainBlog from '../AllBlog/SustainBlog/SustainBlog';
import FeatureSection from '../AllBlog/FeatureSection/FeatureSection'
import TopBanner from './../BannerSection/TopBnner/TopBanner';
import Footer from './../Shared/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <TopBanner/>
      <FeatureSection/>
      <VideoSection />
      <MealsBlogSection />
      <SpecialDietsBlog />
      <HealthyEating />
      <FoodFreedomBlog />
      <ConditionsBlog />
      <FeelGoodFoodBlog />
      <ProductsBlog />
      <VitaminsSupplementsBlog />
      <SustainBlog />
      <Footer/>
    </div>
  );
};

export default Home;