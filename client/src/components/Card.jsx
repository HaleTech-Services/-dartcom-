export default function Card() {
  return (
    <>
      <div className="w-[23.938rem] h-[20.375rem] overflow-hidden rounded-2xl relative my-8 ">
        <img
          src="/assets/boardroom.jpeg"
          alt="pic"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-2 text-white">
          <span>2021 Jan</span>
          <span>Dartcorm conference</span>
        </div>
      </div>
    </>
  );
}
