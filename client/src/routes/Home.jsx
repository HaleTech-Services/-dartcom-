import HomeBanner from "../components/HomeBanner.jsx";
import VisionMission from "../components/VisionMission.jsx";
import Testimonial from "../components/HomeTestimonial.jsx";
import Services from "../components/Services.jsx";
import ConstructionSolutions from "../components/ConstructionSolutions.jsx";
import PromisesAndValues from "../components/PromisesAndValues.jsx";
import Projects from "../components/Project.jsx";
import Team from "../components/Team.jsx";

const Home = () => {
  return (
    <section className="w-full h-auto">
      <HomeBanner />
      <ConstructionSolutions />
      <VisionMission />
      <PromisesAndValues />
      <Services />
      <Projects />
      <Team />
      <Testimonial />
    </section>
  );
};

export default Home;
