import constructionImage from "../assets/construction.jpeg";
import Navbar from "../components/Navbar";
import Card from "../components/Card"; 
import Footer from "../components/Footer"; 

const Gallery = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="w-full max-h-[10rem] overflow-hidden flex justify-center items-center relative">
          <img src={constructionImage} alt="" className="w-full h-auto " />
          <div className="w-full h-full bg-primaryColor absolute top-0 bottom-0 left-0 right-0 opacity-45 flex justify-center items-center">
            <span className="color-white text-[3rem] ">Gallery</span>
          </div>
        </section>
        <div className="grid grid-cols-3 md:grid-cols4 justify-center justify-items-center items-center gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Gallery;