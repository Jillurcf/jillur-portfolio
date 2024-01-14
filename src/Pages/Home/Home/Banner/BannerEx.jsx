import img from "../../../../assets/IT.png";
// import img1 from "../../../../assets/Rectangle-26.png"

const BannerEx = () => {
  return (
    <div className="bg-gray-900 h-[313px] flex justify-between overflow-hidden">
      <div>
        <h1 className="flex items-center h-full px-36 justify-start text-start z-50 text-gray-400">
          Information Technology (IT) refers to the use of computers, software,
          networks, and other technology tools to store, process, transmit, and
          retrieve information. IT plays a crucial role in various aspects of
          modern life, including business, education, communication,
          entertainment, and more.
        </h1>
      </div>
      <div>
        <img className="absolute" src={img} alt="" />
        <div className="w-[300px] h-[300px] border border-black rotate-45 rounded-xl relative"></div>
      </div>
    </div>
  );
};

export default BannerEx;
