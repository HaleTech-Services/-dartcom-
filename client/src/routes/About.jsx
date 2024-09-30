import HeroSection from "../components/HeroSection";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <>
      <main>
        <HeroSection text={"ABOUT US"} />

        <div className="p-8 md:p-12 mx-5 flex flex-col gap-3">
          <section className="text-center mb-8">
            <h2 className="text-orange-600 uppercase tracking-widest mb-2">
              Who We Are
            </h2>
            <h1 className="text-2xl font-bold">
              We Provide The Best Customer Services
            </h1>
            <p className="mt-4 text-gray-700 text-justify">
              Dartcom Projects Nigeria Ltd is a company that is known
              internationally for providing engineering solutions in the area of
              construction, maintenance and fabrication. We offer engineering expertise that
              best suits your requirement and imagination in both functional and
              projects designs.
            </p>
          </section>

          <section className="text-center mb-8">
            {/* <p className="text-gray-700 text-justify">
              We also offer innovative and cost effective solutions to our
              clients, including conceptual ideas in engineering and
              construction, design and fabrication as well as long term
              maintenance. We sustain our reputation by delivering quick job
              performance and services in accordance with international
              standards achieved by a continuous trained and skilled workforce
              that carry out their job with a fleet of modern construction and
              fabrication equipment. Other specialized services that we offer in
              construction and fabrication are as follow:
            </p> */}
            <p>
              Dartcom Projects Nigeria Limited is owned and managed by a group
              of indigenous professionals and seasoned Engineers who are experts
              across the Engineering and Management discipline with proven
              records and experience.
              <br />
              <br />
              Dartcom Projects Nigeria Limited was registered in Nigeria since
              the year 2009 and has made tremendous achievements and
              contributions in the field of Engineering. Her staff strength is
              made up of qualified Civil and Mechanical Engineers, seasoned
              inspectors and managers Accountants and administrators with many
              years of experience in their various area of specialization.
              <br />
              <br />
              Dartcom Projects Nigeria Limited has the proven expertise to
              successfully execute any Engineering and Maintenance Project; the
              company maintains a system of regular professional and safety
              performance with adequate safety consciousness among its staff.
              Dartcom Projects Nigeria Limited terms and conditions are flexible
              and negotiable.
            </p>
          </section>

          <section className="text-center">
            {/* <h2 className="text-orange-600 uppercase tracking-widest mb-2">
              Dartcom
            </h2> */}
            <h1 className="text-2xl font-bold">Our Mission</h1>
            <p className="mt-4 text-gray-700 text-center">
              We Pledge to deliver Without breach of terms. <br />
              We pledge to develop Nigeria's local content. <br />
              We pledge to uphold National pride and nations Building.
            </p>
          </section>

          <p className="my-5"> </p>

          <section className="text-center">
            {/* <h2 className="text-orange-600 uppercase tracking-widest mb-2">
              Dartcom
            </h2> */}
            <h1 className="text-2xl font-bold">Our VISION</h1>
            <p className="mt-4 text-gray-700 text-center">
              To be Nigeria’s foremost company in our discipline. <br />
              To contribute a meaningful quota in achieving vision 2050 <br />
              To drastically reduce unemployment by investing in human capital
              development.
            </p>
          </section>

          <section className="text-center">
            {/* <h2 className="text-orange-600 uppercase tracking-widest mb-2">
              Dartcom
            </h2> */}
            <h1 className="text-2xl font-bold">Our Belief</h1>
            <p className="mt-4 text-gray-700 text-left">
              <span className="text-[#D2153D] font-bold">PROFILE:</span> To be
              recognized as the leading construction, Engineering, Inspection
              and testing, Procurement and supply servicing company in Nigeria.
              <br /> <br />
              <span className="text-[#D2153D] font-bold">GROWTH:</span> To
              maintain controlled profitable growth in Nigeria and Africa.
              <br /> <br />
              <span className="text-[#D2153D] font-bold">PEOPLE:</span> To be
              the company that the people want to join and stay with. <br />{" "}
              <br />
              <span className="text-[#D2153D] font-bold">INNOVATION:</span> To
              be a company that actively forsters Innovation <br /> <br />
              <span className="text-[#D2153D] font-bold">
                QUALITY OF SERVICE:
              </span>
              To be a quality company, highly valued by our customers. <br />
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-orange-600 uppercase tracking-widest mb-2">
              OUR TEAM
            </h2>
            <h1 className="text-2xl font-bold">WE HAVE EXPERIENCED MEMBERS</h1>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex flex-col items-start w-full md:w-1/4 aspect-square gap-3 font-semibold">
                <div className="w-full h-full aspect-square">
                  <img
                    src="/assets/teem3.jpeg"
                    alt="Project Managers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Project Managers</span>
              </div>

              <div className="flex flex-col items-start w-full md:w-1/4 aspect-square gap-3 font-semibold">
                <div className="w-full h-full aspect-square">
                  <img
                    src="/assets/Teamm.jpeg"
                    alt="Project Managers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Technical Team</span>
              </div>

              <div className="flex flex-col items-start w-full md:w-1/4 aspect-square gap-3 font-semibold">
                <div className="w-full h-full aspect-square">
                  <img
                    src="/assets/teem.jpeg"
                    alt="Project Managers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Construction Team</span>
              </div>

              <div className="flex flex-col items-start w-full md:w-1/4 aspect-square gap-3 font-semibold">
                <div className="w-full h-full aspect-square">
                  <img
                    src="/assets/teem1.jpeg"
                    alt="Project Managers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Architectural Team</span>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="w-[90%] mx-auto p-3">
            <div className="text-center">
              <h2 className="text-sm text-orange-500">OUR WORK</h2>
              <h1 className="text-2xl md:text-4xl font-bold">
                EXPLORE OUR RECENT PROJECT
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="relative row-span-2 w-full h-64 md:h-full">
                <img
                  src="/assets/found.jpg"
                  alt="Project 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
              </div>
              <div className="relative w-full h-48 md:h-64">
                <img
                  src="/assets/found2.jpg"
                  alt="Project 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-black/50 via-transparent to-black/50"></div>
              </div>
              <div className="relative w-full h-48 md:h-64">
                <img
                  src="/assets/road.jpg"
                  alt="Project 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
              </div>
              <div className="relative w-full h-48 md:h-64">
                <img
                  src="/assets/war.jpg"
                  alt="Project 4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
              </div>
              <div className="relative w-full h-48 md:h-64">
                <img
                  src="/assets/grid-1.jpg"
                  alt="Project 5"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={handleClick}
                className="bg-transparent text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
              >
                Explore Projects
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
