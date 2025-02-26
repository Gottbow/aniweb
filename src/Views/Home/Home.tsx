//Imports de los Components
import Footer from "../../Components/Footer/Footer";

import sunshine from "../../assets/img/sunshine.jpg";

function Home() {
  return (
    <div className="bg-white">
      <div className="text-center p-10">
        <h1 className="text-3xl">Kanon</h1>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-15 gap-x-14 mt-10 mb-5"
      >
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={sunshine}
              alt="Product"
              className="h-90 w-72 object-cover rounded-t-xl"
            />
            <div className="px-5 py-4 w-auto ">
              <p className="text-[23px] font-bold text-black truncate block capitalize">
                Love Live! Sunshine
              </p>
              <div className="flex items-center gap-2 mt-1 ro">
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  Finished
                </p>
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  13 EP
                </p>
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  2015
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={sunshine}
              alt="Product"
              className="h-90 w-72 object-cover rounded-t-xl"
            />
            <div className="px-5 py-4 w-auto ">
              <p className="text-[23px] font-bold text-black truncate block capitalize">
                Love Live! Sunshine
              </p>
              <div className="flex items-center gap-2 mt-1 ro">
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  Finished
                </p>
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  13 EP
                </p>
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  2015
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={sunshine}
              alt="Product"
              className="h-90 w-72 object-cover rounded-t-xl"
            />
            <div className="px-5 py-4 w-auto ">
              <p className="text-[23px] font-bold text-black truncate block capitalize">
                Love Live! Sunshine
              </p>
              <div className="flex items-center gap-2 mt-1 ro">
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  Finished
                </p>
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  13 EP
                </p>
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  2015
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={sunshine}
              alt="Product"
              className="h-90 w-72 object-cover rounded-t-xl"
            />
            <div className="px-5 py-4 w-auto ">
              <p className="text-[23px] font-bold text-black truncate block capitalize">
                Love Live! Sunshine
              </p>
              <div className="flex items-center gap-2 mt-1 ro">
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  Finished
                </p>
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  13 EP
                </p>
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  2015
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={sunshine}
              alt="Product"
              className="h-90 w-72 object-cover rounded-t-xl"
            />
            <div className="px-5 py-4 w-auto ">
              <p className="text-[23px] font-bold text-black truncate block capitalize">
                Love Live! Sunshine
              </p>
              <div className="flex items-center gap-2 mt-1 ro">
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  Finished
                </p>
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  13 EP
                </p>
                <p className="bg-black rounded-[6px] text-sm font-bold text-white rounded px-2 py-1 mr-1 mt-2">
                  2015
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
