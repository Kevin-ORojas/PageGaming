import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <article className="md:grid md:grid-cols-2 md:gap-24 p-14">
        <section className="flex flex-col justify-center items-center">
          <div className="w-full md:w-[450px]  text-center">
            <p className="mx-auto text-colorCnt animate-bounce font-semibold text-left mb-4">
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
              className="text-left text-white bg-colorCnt hover:animate-pulse text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded-md"
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

      <section className="md:flex md:flex-col md:justify-around md:items-center md:my-4 md:px-8 md:h-[600px] ">
        <article className="">
          <div className="md:flex md:justify-between items-center py-4">
            <h2 className="md:text-2xl font-bold text-white">
              Currently Trending games
            </h2>
            <div className="py-4">
              <button className="h-10 w-24 rounded-md bg-seeAll uppercase text-white font-bold">
                see all
              </button>
            </div>
          </div>
          <div className="md:flex md:gap-24">
            <div className="">
              <img
                className="w-[200px] h-[200px] hover:p-2 object-cover rounded-xl shadow-2xl "
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
                className="w-[200px] h-[200px] hover:p-2 object-cover rounded-xl shadow-2xl"
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
                className="w-[200px] h-[200px] hover:p-2 object-cover rounded-xl shadow-2xl"
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
                className="w-[200px] h-[200px] hover:p-2 object-cover rounded-xl shadow-2xl"
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

      <section className="md:h-[150px]">
        <article className="">
          <p className="text-2xl  text-white font-bold text-center">
            Esto es una aplicacion donde se muestra informacion de video juegos
            y tambien puedes comprar alguno de ellos
          </p>
        </article>
      </section>

      <section className="md:h-[750px]">
        <article className="flex justify-start items-center ">
          <div className="shadow-2xl drop-shadow-lg">
            <img className="w-full h-full object-cover" src="./images/img-4.png" alt="" />
          </div>
        </article>
      </section>

      <section className="relative w-full h-[750px]">
        <img
          className="absolute w-full h-full object-cover filter brightness-50"
          src="./images/img-2.png"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex justify-center py-24 w-full">
          <p className="absolute text-white z-10 text-2xl text-center md:w-[700px] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            mollitia accusamus ipsam? Aperiam, eaque iure.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
