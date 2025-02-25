import sunshine from "../../assets/img/sunshine.jpg";

function Section_Anime() {
  return (
    <div className="bg-white text-gray-800">
      <header className="flex h-52 w-full">
        <img src={sunshine} alt="img" className="filter blur-lg object-cover w-full" />
      </header>

      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/5 p-4">
            <img src={sunshine} alt="img" className="w-full" />
          </div>

          <div className="w-full md:w-4/5 p-4 grid gap-4 grid-cols-1 grid-rows-[auto_auto_auto_auto]">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h1 className="text-2xl font-bold">Love Live Sunshine!!</h1>
            </div>

            <div className="flex space-x-4 mb-4">
              <i className="fa fa-check-square-o" aria-hidden="true"></i>
              <i className="fa fa-repeat" aria-hidden="true"></i>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <i className="fa fa-usd" aria-hidden="true"></i>
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </div>

            <div className="w-full md:w-4/5 p-4 grid gap-4 grid-cols-1 grid-rows-[auto_auto_auto_auto] mt-4">
          <div className="flex flex-wrap space-x-4 mb-4">
            <a href="#" className="bg-gray-800 text-white font-nunito text-xs rounded px-4 py-2 mr-1 mt-2">2019</a>
            <a href="#" className="bg-gray-800 text-white font-nunito text-xs rounded px-4 py-2 mr-1 mt-2">Comedy</a>
            <a href="#" className="bg-gray-800 text-white font-nunito text-xs rounded px-4 py-2 mr-1 mt-2">Music</a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Description</h2>
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
