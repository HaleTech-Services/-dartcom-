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
      <footer></footer>
    </>
  );
}

/*  <header className="w-full bg-white flex justify-center items-center">
        <div>
          <ul className="flex">
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
          <button>Contact Us</button>
        </div>
      </header>
      <section className="body">
        <img src={constructionImage} alt="" />
      </section>*/
