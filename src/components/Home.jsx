import React from "react";

const Home = () => {
  return (
    <main className="h-screen flex  justify-center items-center">
      <article className="grid grid-cols-2 gap-4">
        <section className="flex flex-col justify-center items-center">
          <div className="w-[450px] text-center ">
            <p className="mx-auto text-colorCnt font-semibold text-left mb-4">Proved By prodesigner</p>
            <h1 className="text-white text-5xl lin text-left leading-normal font-bold">
              Work that we produce for our clients
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              magnam est fugit neque at qui atque impedit ex ipsam consequatur!
            </p>
          </div>

          <button type="submit">Ger more details</button>
        </section>

        <section className="flex justify-center">
          <div className="">
            <img className="" src="./images/image2.png" alt="" />
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
