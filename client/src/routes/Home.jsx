import Navbar from "../components/Navbar";
import HomeBanner from '../components/HomeBanner';
import VisionMission from '../components/VisionMission';
import HomeFaq from '../components/HomeFaq';
import HomeTestimonial from '../components/HomeTestimonial';
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className='w-full h-auto'>
      <header>
        <Navbar />
      </header>
      <HomeBanner />
      <VisionMission />
      <HomeFaq />
      <HomeTestimonial />
      <footer>
        <Footer />
      </footer>
    </section>
  )
}

export default Home;