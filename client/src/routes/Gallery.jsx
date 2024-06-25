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
        <section className="w-full max-h-[10rem] overflow-hidden relative flex justify-center items-center">
          <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-blue-500 opacity-50 flex justify-center items-center">
            <span className="text-white text-3xl">Gallery</span>
          </div>
          <img src={constructionImage} alt="" className="w-full h-auto object-cover" />
        </section>
        <div className="grid grid-cols-3 md:grid-cols-4 justify-center justify-items-center items-center gap-2 px-[3rem]">
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
          <Card />
          <Card />
        </div>
        <div className="w-full flex items-center justify-center mt-11">
          <button className="bg-blue-700 text-white py-3 px-[4rem] cursor-pointer rounded-lg">See more</button>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Gallery;
