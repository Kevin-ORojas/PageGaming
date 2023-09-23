import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <article className="md:grid md:grid-cols-2 md:gap-24">
        <section className="flex flex-col justify-center items-center">
          <div className="w-full md:w-[450px] text-center">
            <p className="mx-auto text-colorCnt font-semibold text-left mb-4">Proved By prodesigner</p>
            <h1 className="text-white text-xl md:text-5xl lin text-left leading-normal font-bold md:text-left md:leading-normal md:font-bold">
              Work that we produce for our clients
            </h1>

            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              magnam est fugit neque at qui atque impedit ex ipsam consequatur!
            </p>
          </div>

          <button type="submit">Get more details</button>
        </section>

        <section className="flex justify-center">
          <div className="">
            <img className="w-full md:w-[550px]" src="./images/image2.png" alt="" />
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
