import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";

//About us page function
export default function About() {
  return (
    <>
      <header></header>
      <main>
        <section>
          {/* render Hero Section */}
          <HeroSection />
          <div className="m-20">
            {/* description text */}
            <div className="m-[30px]">
              <p>
                Dartcom Projects Nigeria Limited is owned and managed by a group
                of indigenous professionals and seasoned Engineers who are
                experts across the Engineering and management discipline with
                proven records and experience.
              </p>
              <p className="mt-4">
                Dartcom Projects Nigeria Limited was registered in Nigeria since
                the year 2009 and has made tremendous achievements and
                contributions in the field of Engineering. Her staff strength is
                made up of qualified Civil and Mechanical Engineers, seasoned
                inspectors and managers Accountants and administrators with many
                years of experience in their various area of specialization.
              </p>
              <p className="mt-4">
                Dartcom Projects Nigeria Limited has the proven expertise to
                successfully execute any Engineering and Maintenance Project;
                the company maintains a system of regular professional and
                safety performance with adequate safety consciousness among its
                staff. Dartcom Projects Nigeria Limited terms and conditions are
                flexible and negotiable.
              </p>
            </div>

            {/* render gallery section */}
            <GallerySection />
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
