import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <article className="md:grid md:grid-cols-2 md:gap-24">
        <section className="flex flex-col justify-center items-center">
          <div className="w-full md:w-[450px] text-center">
            <p className="mx-auto text-colorCnt font-semibold text-left mb-4">
              Proved By prodesigner
            </p>
            <h1 className="text-white text-xl md:text-5xl lin text-left leading-normal font-bold md:text-left md:leading-normal md:font-bold">
              Work that we produce for our clients
            </h1>

            <p className="text-white py-10 text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              magnam est fugit neque at qui atque impedit ex ipsam consequatur!
            </p>
          </div>

          <div>
            <button
              className="text-left text-white bg-colorCnt hover:bg-blue-700 text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded-md"
              type="submit"
            >
              Get more details
            </button>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="">
            <img
              className="w-full md:w-[550px]"
              src="./images/image2.png"
              alt=""
            />
          </div>
        </section>
      </article>

      <section className="flex flex-col justify-around items-center my-4 px-8 h-[600px] ">
        <article className="">
          <div className="flex justify-between py-12">
            <h2 className="text-2xl font-bold text-white">
              Currently Trending games
            </h2>
            <button className="h-10 w-24 rounded-md bg-seeAll uppercase text-white font-bold">
              see all
            </button>
          </div>
          <div className="flex gap-24">
            <div>
              <img
                className="w-[200px] h-[200px] object-cover rounded-xl shadow-2xl "
                src="/public/images/img1.jpg"
                alt=""
              />
              <p className="mt-4 text-white text-center font-bold">
                <i className="bx bxs-hot mr-2"></i>
                40 follower
              </p>
            </div>
            <div>
              <img
                className="w-[200px] h-[200px] object-cover rounded-xl shadow-2xl"
                src="/public/images/img2.jpg"
                alt=""
              />
              <p className="mt-4 text-white text-center font-bold">
                <i className="bx bxs-hot mr-2"></i>
                40 follower
              </p>
            </div>
            <div>
              <img
                className="w-[200px] h-[200px] object-cover rounded-xl shadow-2xl"
                src="/public/images/img3.jpg"
                alt=""
              />
              <p className="mt-4 text-white text-center font-bold">
                <i className="bx bxs-hot mr-2"></i>
                40 follower
              </p>
            </div>
            <div>
              <img
                className="w-[200px] h-[200px] object-cover rounded-xl shadow-2xl"
                src="/public/images/img4.jpg"
                alt=""
              />

              <p className="mt-4 text-white text-center font-bold">
                <i className="bx bxs-hot mr-2"></i>
                40 follower
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
