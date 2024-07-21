import Navbar from "../components/Navbar";
import HomeBanner from '../components/HomeBanner';
import VisionMission from '../components/VisionMission';
import HomeFaq from '../components/HomeFaq';
import HomeTestimonial from '../components/HomeTestimonial';
import Footer from "../components/Footer";
import Services from "../components/Services.jsx"

const Home = () => {
  return (
    <section className='w-full h-auto'>  
      <HomeBanner />
      <VisionMission />
      <Services/>
      <HomeFaq />
      <HomeTestimonial />
    </section>
  )
}

export default Home;