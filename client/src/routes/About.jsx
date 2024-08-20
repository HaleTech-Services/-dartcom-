import HeroSection from "../components/HeroSection";
import Projects from "../components/Project";

const About = () => {

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
            <p className="mt-4 text-gray-700 text-left">
              Dartcom Projects Nigeria Ltd is a company that is known
              internationally for providing engineering solutions in the area of
              construction and fabrication. We offer engineering expertise that
              best suits your requirement and imagination in both functional and
              projects designs.
            </p>
          </section>

          <section className="text-center mb-8">
            <p className="text-gray-700 text-left">
              We also offer innovative and cost effective solutions to our
              clients, including conceptual ideas in engineering and
              construction, design and fabrication as well as long term
              maintenance. We sustain our reputation by delivering quick job
              performance and services in accordance with international
              standards achieved by a continuous trained and skilled workforce
              that carry out their job with a fleet of modern construction and
              fabrication equipment. Other specialized services that we offer in
              construction and fabrication are as follow:
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-orange-600 uppercase tracking-widest mb-2">
              Dartcom
            </h2>
            <h1 className="text-2xl font-bold">Our Mission</h1>
            <p className="mt-4 text-gray-700 text-left">
              We Pledge to deliver Without breach of terms. We pledge to develop
              Nigerians local content. We pledge to uphold National pride and
              nations Building.
            </p>
          </section>

          <p className="my-5"> </p>

          <section className="text-center">
            <h2 className="text-orange-600 uppercase tracking-widest mb-2">
              Dartcom
            </h2>
            <h1 className="text-2xl font-bold">Our VISION</h1>
            <p className="mt-4 text-gray-700 text-left">
              To be Nigerias’ foremost company in our discipline to contribute a
              meaningful quota in achieving vision 2020 To drastically reduce
              unemployment by investing in human capital development.
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-orange-600 uppercase tracking-widest mb-2">
              Dartcom
            </h2>
            <h1 className="text-2xl font-bold">Our Belief</h1>
            <p className="mt-4 text-gray-700 text-left">
              <span className="text-[#D2153D] font-bold">PROFILE:</span> To be
              recognized as the leading construction, Engineering, Inspection
              and testing, Procurement and supply servicing company in Nigeria.
              <br />
              <span className="text-[#D2153D] font-bold">GROWTH:</span> To
              maintain controlled profitable growth in Nigeria and Africa.
              <br />
              <span className="text-[#D2153D] font-bold">PEOPLE:</span> To be
              the company that the people want to join and stay with. <br />
              <span className="text-[#D2153D] font-bold">INNOVATION:</span> To
              be a company that actively forsters Innovation <br />
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
                    src="/public/assets/team1.jpeg"
                    alt="Project Managers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Project Managers</span>
              </div>

              <div className="flex flex-col items-start w-full md:w-1/4 aspect-square gap-3 font-semibold">
                <div className="w-full h-full aspect-square">
                  <img
                    src="/public/assets/team2.jpeg"
                    alt="Project Managers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Technical Team</span>
              </div>

              <div className="flex flex-col items-start w-full md:w-1/4 aspect-square gap-3 font-semibold">
                <div className="w-full h-full aspect-square">
                  <img
                    src="/public/assets/team3.jpeg"
                    alt="Project Managers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Construction Team</span>
              </div>

              <div className="flex flex-col items-start w-full md:w-1/4 aspect-square gap-3 font-semibold">
                <div className="w-full h-full aspect-square">
                  <img
                    src="/public/assets/team4.jpeg"
                    alt="Project Managers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Architectural Team</span>
              </div>
            </div>
          </section>

          <Projects />
        </div>
      </main>
    </>
  );
};

export default About;
