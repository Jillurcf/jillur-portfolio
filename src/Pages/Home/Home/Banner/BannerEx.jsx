import img from "../../../../assets/IT.png";
// import img1 from "../../../../assets/Rectangle-26.png"

const BannerEx = () => {
  return (
    <div className="bg-gray-900 h-[313px] flex justify-between overflow-hidden">
      <div>
        <h1 className="flex items-center h-full px-36 justify-start text-start z-50 text-gray-400">My objective is to contribute my expertise in exceptional user experiences and visually appealing interfaces to a dynamic and innovative team. Seeking a challenging role where I can continually grow as a web developer and contribute to the projects in a competitive and collaborative environment.</h1>
      </div>
      <div>
        <img className="absolute" src={img} alt="" />
        <div className="w-[300px] h-[300px] border border-black rotate-45 rounded-xl relative"></div>
      </div>
    </div>
  );
};

export default BannerEx;
