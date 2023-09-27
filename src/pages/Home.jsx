import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <article className="md:grid md:grid-cols-2 md:gap-24 p-14">
        <section className="flex flex-col justify-center items-center">
          <div className="w-full md:w-[450px]  text-center md:ml-28">
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
        <div className="md:flex md:justify-between items-center w-full py-4">
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
      </section>

      <section className="md:h-[150px]">
        <article className="h-[150px] py-5">
          <p className="text-2xl  text-white font-bold text-center">
            Esto es una aplicacion donde se muestra informacion de video juegos
            y tambien puedes comprar alguno de ellos
          </p>
        </article>
      </section>

      <section className="h-[250px] md:h-[750px]">
        <article className="flex justify-start items-center ">
          <div className="shadow-2xl drop-shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="./images/img-4.png"
              alt=""
            />
          </div>
        </article>
      </section>

      <section className="w-full h-[950px]">
        <img
          className="absolute w-full h-[890px] object-cover filter brightness-50"
          src="./images/img-2.png"
          alt=""
        />

        <article className="">
          <div className="flex justify-center py-24 w-full ">
            <p className="absolute text-white z-10 md:text-xl text-center md:w-[700px] leading-5 md:leading-9 font-semibold ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              mollitia accusamus ipsam? Aperiam, eaque iure.
            </p>
          </div>

          <div className="flex justify-center h-12 w-full">
            <p className="absolute text-white z-10 text-md text-center md:w-[700px] md:leading-9 mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              mollitia accusamus ipsam? Aperiam, eaque iure.
            </p>
          </div>
        </article>

        {/*Section donde se encuentran las imagenes de diferentes dispositivos de juegos*/}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-12 justify-center items-center mt-24 md:mt-36 relative text-white font-semibold">
          {/* Contenedor 1 */}
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              className="relative w-[50px] md:w-auto"
              src="./images/eclipse.png"
              alt=""
            />
            <img
              className="absolute top-2 left-13  "
              src="./images/pc.png"
              alt=""
            />
            <p className="text-center">PC Game development</p>
            <img src="./images/arrow.png" alt="" />
          </div>

          {/* Contenedor 2 */}
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              className="relative w-[50px] md:w-auto "
              src="./images/eclipse.png"
              alt=""
            />
            <img
              className="absolute top-1 left-13"
              src="./images/ps4.png"
              alt=""
            />
            <p className="text-center">PS4 Game development</p>
            <img src="./images/arrow.png" alt="" />
          </div>

          {/* Contenedor 3 */}
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              className="relative w-[50px] md:w-auto "
              src="./images/eclipse.png"
              alt=""
            />
            <img
              className="absolute top-[205px] md:top-4"
              src="./images/smartphone.png"
              alt=""
            />
            <p className="text-center">Mobile Game development</p>
            <img src="./images/arrow.png" alt="" />
          </div>

          {/* Contenedor 4 */}
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              className="relative w-[50px] md:w-auto "
              src="./images/eclipse.png"
              alt=""
            />
            <img
              className="absolute sm:top-[px] top-[216px] md:top-[205px]  "
              src="./images/glases.png"
              alt=""
            />
            <p className="text-center">AR/ VR development</p>
            <img src="./images/arrow.png" alt="" />
          </div>

          {/* Contenedor 5 */}
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              className="relative w-[50px] md:w-auto "
              src="./images/eclipse.png"
              alt=""
            />
            <img
              className="absolute top-[405px] md:top-[205px]"
              src="./images/cube.png"
              alt=""
            />
            <p>3D modelings</p>
            <img src="./images/arrow.png" alt="" />
          </div>

          {/* Contenedor 6 */}
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              className="relative w-[50px] md:w-auto "
              src="./images/eclipse.png"
              alt=""
            />
            <img
              className="absolute top-[405px] md:top-52"
              src="./images/desktop.png"
              alt=""
            />
            <p>AR/VR desing</p>
            <img src="./images/arrow.png" alt="" />
          </div>
        </section>
      </section>
      <section className="w-full relative text-white text-center">
        <article className="h-[150px]">
          <h1 className="text-3xl font-bold mb-6 text-white">
            Our Recent project
          </h1>
          <div className="w-full flex justify-center">
            <p className="w-[450px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quos id autem illo voluptatibus. Temporibus.
            </p>
          </div>
        </article>

        <article className="flex justify-center gap-8 flex-wrap p-4">
          <div>
            <img src="./images/Rectangle.png" className="" alt="" />
          </div>
          <div>
            <img src="./images/Rectangle1.png" className="" alt="" />
          </div>
          <div>
            <img src="./images/Rectangle2.png" className="" alt="" />
          </div>
          <div>
            <img src="./images/Rectangle4.png" className="" alt="" />
          </div>
          <div>
            <img src="./images/Rectangle5.png" className="" alt="" />
          </div>
          <div>
            <img src="./images/Rectangle3.png" className="" alt="" />
          </div>
        </article>
        <div className="py-4">
          <button className="h-10 w-24 rounded-md bg-colorCnt uppercase text-white font-bold">
            see all
          </button>
        </div>
      </section>

      <section className="w-full h-auto p-4">
        <article className="flex flex-col items-center justify-center  gap-2">
          <div className="my-8 text-center text-white font-semibold text-xl md:text-2xl">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic.</p>
          </div>
          <div className="border-1 bg-barraloop rounded-xl flex-shrink-0 w-full md:w-[750px] h-[150px] lg:w-[650] md: py-4 pl-2 ">
            <div
              className="text-center md:flex md:justify-center md:items-center md:mt-4
             "
            >
              <div>
                <h2 className="text-white text-left pl-4 md:text-2xl">Stay in start loop</h2>
                <p className="text-white text-left pl-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                  suscipit.
                </p>
              </div>
              <div className="md:w-[100%] p-4 md:py-4 flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="rounded-md w-full pr-[2rem] bg-transparent border placeholder-[10px] h-[40px] text-[14px] text-center font-semibold" // Agregar espacio a la derecha para el botón
                />
                <button className="top-[73px] md:top-[50px] left-38 right-0 h-[2.4rem] w-[5rem] md:w-30 md:h-10 rounded-md bg-colorCnt  text-white font-bold text-[10px] md:text-[12px]">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
