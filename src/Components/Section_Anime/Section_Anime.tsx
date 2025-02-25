import sunshine from "../../assets/img/sunshine.jpg";

function Section_Anime() {
  return (
   

    <div className="bg-white text-gray-800">
      
      {/* banner */}

      <header className="flex md:h-80 h-50 w-full">
        <img src={sunshine} alt="img" className="filter blur-lg object-cover w-full" />
      </header>

     {/* Anime Image */}

      <div className="container mx-auto md:pt-20 pt-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/5 p-4  drop-shadow-[0px_0px_5px_rgba(0,0,0,0.50)]">
            <img src={sunshine} alt="img" className="w-full rounded-[10px]" />
          </div>

          {/* Anime Title  pl-10 pr-10 md:pl-15 md:pr-15 */}

          <div className="w-full md:w-auto ml-8 mr-8 md:ml-20 mt-6 grid grid-cols-1 grid-rows-[auto_auto_auto_auto]">
              <h1 className="text-4xl font-bold">Love Live Sunshine!!</h1>


            {/* <div className="flex space-x-4 mb-4">
              <i className="fa fa-check-square-o" aria-hidden="true"></i>
              <i className="fa fa-repeat" aria-hidden="true"></i>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <i className="fa fa-usd" aria-hidden="true"></i>
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </div> */}

            <div className="w-full md:w-4/5 grid grid-cols-1 grid-rows-[auto_auto_auto_auto]">
          <div className="flex flex-wrap space-x-4 mt-auto gap-1">
            <a href="#" className="bg-gray-800 text-white font-nunito text-xs rounded px-4 py-2 mr-1 mt-2">2019</a>
            <a href="#" className="bg-gray-800 text-white font-nunito text-xs rounded px-4 py-2 mr-1 mt-2">Comedy</a>
            <a href="#" className="bg-gray-800 text-white font-nunito text-xs rounded px-4 py-2 mr-1 mt-2">Music</a>
          </div>

              {/* Description*/}

          <div className="bg-gray-100 p-3 rounded-[15px] md:mt-auto mt-5">
            <h2 className="text-xl font-semibold ">Description</h2>
            <p className="flex flex-wrap text-base">
              The second term has started and the members of Aqours work
              harder than ever to save their school from being shut down.
            </p>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_Anime;
