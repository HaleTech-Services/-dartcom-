import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ServicesProps from "../components/ServicesProps";
import img1 from "../assets/img13.png";
import img2 from "../assets/img14.png";
import img3 from "../assets/img15.png";
import img4 from "../assets/img16.png";
import img5 from "/assets/Oil.jpeg";
import img6 from "/assets/prog3.jpg";
import img7 from "/assets/archi5.jpg";
import img8 from "/assets/Beam.jpg";
import img9 from "/assets/Technical.jpeg";
import img10 from "../assets/img22.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  const p = "OUR SERVICES";
  const param =
    "Dartcom carries out its construction and fabrication works to meet international standards and specifications and we ensure that our works exhibits a high structural integrity, durability and corrosive resistance";
  const header = "Build Your Future Today";

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="w-full h-auto mb-0">
      <HeroSection text={p} />

      <section className="w-full pt-[50px] px-[1rem] sm:px-[2rem] lg:px-[5rem]">
        <h4
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-[#FF7B00] text-center text-[16px] font-semibold mb-2"
        >
          OUR SERVICES
        </h4>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-center text-xl sm:text-2xl font-semibold mb-4"
        >
          WE PROVIDE THE BEST CUSTOMER SERVICE
        </h1>
        <div className="pt-5">
          <p data-aos="fade-right" data-aos-duration="1000" className="mb-4">
            Dartcom Projects Nigeria Ltd is a company that is known
            internationally for providing engineering solutions in the area of
            construction and fabrication. We offer engineering expertise that
            best suits your requirement and imagination in both functional and
            projects designs.
          </p>

          <p data-aos="fade-right" data-aos-duration="1000">
            We also offer innovative and cost effective solutions to our
            clients, including conceptual ideas in engineering and construction,
            design and fabrication as well as long term maintenance. We sustain
            our reputation by delivering quick job performance and services in
            accordiance with international standards achieved by a continuous
            trained and skilled workforce that carry out their job with a fleet
            of modern construction and fabrication equipment. Other specialized
            services that we offer in construction and fabrication are as
            follow:
          </p>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="mt-10">
          <ServicesProps />
        </div>

        <div data-aos="fade-right" data-aos-duration="1000" className="mb-5">
          <h4
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-[#FF7B00] text-center sm:text-[16px] font-semibold mb-2"
          >
            MAINTENANCE
          </h4>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center text-xl sm:text-2xl font-semibold mb-4"
          >
            THINK MAINTENANCE, THINK DARTCOM
          </h1>
          <h3 data-aos="fade-right" data-aos-duration="1000">
            DARTCOM PROJECT NIGERIA LIMITED acknowledges that failures in
            lifting equipment can result in significant or even fatal injuries.
            As a result of this, we offer maintenace services to enusre safe and
            successful lifting operations. In addition to the requirements for
            safe design and construction in civil, mechanical, and electrical
            maintenance, all lifting equipments are inspected and maintained as
            necessary to keep it safe for use.
          </h3>
        </div>
      </section>
      <div data-aos="zoom-in-up" data-aos-duration="1000">
        <HeroSection header={header} param={param} />
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="pt-8 px-[1rem] sm:px-[2rem] lg:px-[5rem]"
      >
        <h4 className="text-[#FF7B00] text-center sm:text-[16px] font-semibold mb-2">
          TRAINING SERVICES/COURSES
        </h4>
        <h1 className="text-center text-xl sm:text-2xl font-semibold mb-4">
          FROM NOVICE TO PROFESSIONALISM
        </h1>
        <p className="font-poppins">
          DARTCOM PROJECTS NIGERIA LIMITED has a training facility, with
          experienced and well trained facilitators who are professionals in
          areas of lifting inspection, Crane operator, Rigger, Rope access etc.
          Other training services include Crane inspection training, crane
          operator training, crane maintenance training, Rigger training, Fore man
          training, rope access training, NDTtraining, NEBOSH, Project management
          training etc. Our trainers are certified in LEEA, NSL, Lyod
          British, ASNT, and FACTACT. We also provide training services to our
          client in their facilities.
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <div>
            <img className="w-full" src={img1} alt="" />
            <p className="pt-2 text-sm font-semibold">Project Managers</p>
          </div>
          <div>
            <img className="w-full" src={img2} alt="" />
            <p className="pt-2 text-sm font-semibold">Technical Team</p>
          </div>
          <div>
            <img className="w-full" src={img3} alt="" />
            <p className="pt-2 text-sm font-semibold">Construction Team</p>
          </div>
          <div>
            <img className="w-full" src={img4} alt="" />
            <p className="pt-2 text-sm font-semibold">Architectural Team</p>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="mt-10 px-[1rem] sm:px-[2rem] lg:px-[5rem]"
      >
        <h4 className="text-[#FF7B00] text-center sm:text-[16px] font-semibold mb-2">
          OUR WORK
        </h4>
        <h1 className="text-center text-xl sm:text-2xl font-semibold mb-4">
          EXPLORE OUR RECENT PROJECT
        </h1>
        <div className="lg:flex gap-1 w-full hidden">
          <img className="h-[520px] w-1/4" src={img5} alt="" />

          <div className="flex flex-col gap-1">
            <div className="flex gap-1 w-full">
              <img className="w-[67%] h-64" src={img6} alt="" />
              <img className="w-[33%] h-64" src={img7} alt="" />
            </div>
            <div className="flex gap-1 w-full">
              <img className="w-[33%] h-64" src={img8} alt="" />
              <img className="w-[67%] h-64" src={img9} alt="" />
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="lg:hidden flex flex-col gap-3 w-full"
        >
          <img className="h-[520px] md:w-full" src={img5} alt="" />

          <img className="w-full" src={img6} alt="" />
          <img className="w-full" src={img7} alt="" />

          <img className="w-full" src={img8} alt="" />
          <img className="w-full" src={img9} alt="" />
        </div>
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1000" className="mt-10">
        <img src={img10} alt="" />
      </div>
    </main>
  );
}

export default Services;
