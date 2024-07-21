// export default function Card() {
//   return (
//     <div className="w-[23.938rem] h-[20.375rem] overflow-hidden rounded-2xl relative my-8 ">
//       <img src="/assets/boardroom.jpeg" alt="pic" className="w-full h-full object-cover" />
//       <div className="absolute bottom-4 left-2 text-white">
//         <span>2021 Jan</span>
//         <span>Dartcorm conference</span>
//       </div>
//     </div>
//   );
// }

export default function Card() {
  return (
    <div className="w-90vw h-[calc(50vh - 4rem)] overflow-hidden rounded-2xl relative my-8 ">
      <img src="/assets/boardroom.jpeg" alt="pic" className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-2 text-white">
        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">2021 Jan</span>
        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Dartcom conference</span>
      </div>
    </div>
  );
}
