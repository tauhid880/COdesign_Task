import Masonry from "./Masonry";

const TopCategories = () => {
  return (
    <div className="">
      <div className=" flex justify-center relative top-28 md:top-56 lg:top-[380px] p-2 mb-[500px] lg:mb-0 md:-mb-52 ">
        <div className="bg-white h-56 md:w-full lg:w-[90%] lg:p-5 md:p-5 p-0">
          <h1 className="text-2xl font-Hind font-medium mb-3">
            Top categories
          </h1>
          <div className="grid grid-rows-5 gap-5 md:flex md:p-5 lg:flex lg:justify-around">
            <div className=" w-80 h-48 bg-[url('https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center">
              <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                <span className="text-white text-xl w-1/2 text-center">
                  Summer
                </span>
              </div>
            </div>
            <div className=" w-80 h-48 bg-[url('https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
              <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                <span className="text-white text-xl lg:w-1/2 text-center">
                  Workspace
                </span>
              </div>
            </div>
            <div className=" w-80 h-48 bg-[url('https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
              <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                <span className="text-white text-xl w-1/2 text-center">
                  City
                </span>
              </div>
            </div>
            <div className="w-80 h-48 bg-[url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
              <div className="w-full h-full flex  justify-center items-center backdrop-brightness-75">
                <span className="text-white text-xl w-1/2 text-center">
                  Food
                </span>
              </div>
            </div>
            <div className="w-80 h-48 bg-[url('https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
              <div className="w-full h-full flex  justify-center items-center backdrop-brightness-75">
                <span className="text-white text-xl w-1/2 text-center">
                  Gravity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-start gap-9 top-[500px] lg:top-[500px] left-5 lg:left-11 md:left-11">
        <a className="text-gray-600 text-lg font-medium cursor-pointer">All</a>
        <a className="text-gray-600 text-lg font-medium cursor-pointer">
          Photos
        </a>
        <a className="text-gray-600 text-lg font-medium cursor-pointer">
          Videos
        </a>
        <a className="text-gray-600 text-lg font-medium cursor-pointer">360</a>
      </div>
      <Masonry></Masonry>
    </div>
  );
};

export default TopCategories;
