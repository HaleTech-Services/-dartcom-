import constructionImage from "../assets/construction.jpeg";
import Card from "../components/Card";

export default function Gallery() {
  return (
    <>
      <header className="w-full bg-white flex justify-center items-center  p-8">
        <ul className="flex items-center justify-center gap-4 ml-auto">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
        </ul>
        <button className="ml-auto mr-4 ">Contact Us</button>
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
    </>
  );
}
