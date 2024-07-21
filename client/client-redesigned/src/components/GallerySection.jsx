import GalleryImage from "../assets/Group 15.png";


export default function GallerySection () {
  return (
    <div className="mt-5 text-center">
      <h2 className="text-blue-700 text-align text-1xl font-medium">Gallery</h2>
      <section className="mt-6">
        <div className="flex justify-evenly gap-1">
          <img src={GalleryImage} width={360} alt="gallery-image" />
          <img src={GalleryImage} width={360} alt="gallery-image" />
          <img src={GalleryImage} width={360} alt="gallery-image" />
        </div>

        <div className="flex justify-evenly mt-8 gap-1">
          <img src={GalleryImage} width={360} alt="gallery-image" />
          <img src={GalleryImage} width={360} alt="gallery-image" />
          <img src={GalleryImage} width={360} alt="gallery-image" />
        </div>
      </section>

      <button className="bg-[#0029FF] hover:border hover:bg-white hover:text-blue-800 hover:border-blue-900 text-white px-32 py-2 rounded-md text-center mt-6">
        See more
      </button>
    </div>
  );
}