import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbItems = pathnames.map((pathname, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      return (
        <span key={routeTo}>
          {isLast ? (
            <span
              className={location.pathname === "/about" ? "text-colorCnt" : ""}
            >
              {pathname}
            </span>
          ) : (
            <>
              <Link to={routeTo} className="hover:text-blue-500">
                {pathname}
              </Link>
              <span className="mx-1">{String.fromCharCode(62)}</span>
            </>
          )}
        </span>
      );
    });
    setBreadcrumbs(breadcrumbItems);
  }, [location.pathname]);

  return (
    <main className="bg-gradient-to-b from-purple-700 via-purple-500 to-blue-300 min-h-screen">
      {/* Resto del contenido de la página "About us" */}
      <div className="md:grid md:grid-cols-2 md:gap-8 ">
        <section className="flex flex-col  justify-center items-center text-xl font-bold py-4 ">
          <div className="text-black font-bold text-sm mb-4 flex justify-start w-[290px]">
            {breadcrumbs.length > 0 && (
              <>
                <Link to="/">Home</Link>
                <span className="mx-1">{String.fromCharCode(62)}</span>
              </>
            )}
            {breadcrumbs}
          </div>
          <div className="p-4 text-white w-full flex flex-col justify-center items-center">
            <h1 className="text-left py-4 text-2xl leading-8 w-[300px] p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              temporibus.
            </h1>
            <p className=" leading-7 text-left text-sm w-[300px] p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              vel quibusdam nulla tempora eius quo!
            </p>

            <div className="py-8 flex justify-start w-[300px]">
              <button
                className="text-left text-white bg-colorCnt hover:animate-pulse text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded-full"
                type="submit"
              >
                Get in touch
              </button>
            </div>
          </div>
        </section>
        <section>
          <div>
            <img className="" src="./images/imgbout.png" alt="" />
          </div>
        </section>
      </div>

      <section className="h-full mt-12 p-10">
        <div className="w-full  h-[150px]">
          <h2 className="text-white text-left font-bold md:ml-10 text-2xl py-4 ">
            Why work with us
          </h2>
        </div>
        <article className="w-full flex justify-center gap-8 flex-wrap items-center">
          <div className="bg-cardcolor  text-white border-red-100 w-[350px] h-[350px] rounded-xl p-10">
            <div className="mt-8 md:w-[150px]">
              <h2 className="rounded-xl text-sm bg-aboutcolr text-center py-2 ">
                Lorem ipsum
              </h2>
            </div>
            <div className="mt-10">
              <h2>lorem lorem lorem</h2>
              <p className="py-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum dolor saepe deserunt eaque dolores ea.
              </p>
            </div>
          </div>

          <div className="bg-cardcolor text-white border-red-100 w-[350px] h-[350px] rounded-xl p-10">
            <div className="mt-8 md:w-[150px]">
              <h2 className="rounded-xl text-sm bg-carColorOne text-center py-2 ">
                Lorem ipsum
              </h2>
            </div>
            <div className="mt-10">
              <h2>lorem lorem lorem</h2>
              <p className="py-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum dolor saepe deserunt eaque dolores ea.
              </p>
            </div>
          </div>

          <div className="bg-cardcolor  text-white border-red-100 w-[350px] h-[350px] rounded-xl p-10">
            <div className="mt-8 md:w-[150px]">
              <h2 className="rounded-xl text-sm bg-carColorTwo text-center py-2 ">
                Lorem ipsum
              </h2>
            </div>
            <div className="mt-10">
              <h2>lorem lorem lorem</h2>
              <p className="py-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum dolor saepe deserunt eaque dolores ea.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="">
        <article className="bg-cardcolor text-white md:grid  md:grid-cols-2 justify-center items-center gap-4 ">
          <div className="flex justify-center items-center">
            <img
              src="./images/sectionimg.png"
              className=" h-[380px] w-[450px] mt-16 pl-4"
              alt=""
            />
          </div>

          <div className="p-4">
            <h4 className="mb-4">Lorem, ipsum.</h4>
            <h2 className="mb-4 text-2xl font-bold md:w-[350px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quisquam molestiae rem veniam ut quos voluptas modi inventore ex
              in.
            </h2>

            <div>
              <p className="md:w-[350px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, saepe. Deleniti amet soluta dolore dolorem odit
                voluptatum error molestiae corporis voluptate neque asperiores
                ipsam magni voluptatibus quisquam labore, aut at?
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="w-full h-[880px] md:h-[580px] p-10">
        <h2 className="text-white text-left font-bold md:ml-10 ml-10 text-2xl py-4">
          Our Team
        </h2>

        <article className="flex p-10 justify-evenly flex-wrap gap-4 items-center">
          <div className="bg-black rounded-xl w-[200px] h-[180px] flex justify-center items-center flex-col text-white">
            <img
              className="w-[90px] h-[90px]"
              src="./images/Claudia.png"
              alt="claudia"
            />
            <h2>Claudia</h2>
            <p>COO</p>
          </div>
          <div className="bg-black rounded-xl w-[200px] h-[180px] flex justify-center items-center flex-col text-white">
            <img
              className="w-[90px] h-[90px]"
              src="./images/Bill.png"
              alt="bill"
            />
            <h2>Bill</h2>
            <p>COO</p>
          </div>
          <div className="bg-black rounded-xl w-[200px] h-[180px] flex justify-center items-center flex-col text-white">
            <img
              className="w-[90px] h-[90px]"
              src="./images/Beverly.png"
              alt="beverly"
            />
            <h2>Beverly</h2>
            <p>COO</p>
          </div>
          <div className="bg-black rounded-xl w-[200px] h-[180px] flex justify-center items-center flex-col text-white">
            <img
              className="w-[90px] h-[90px]"
              src="./images/Avatar1.png"
              alt="avatar"
            />
            <h2>Avatar</h2>
            <p>COO</p>
          </div>
        </article>
      </section>

      <section className="w-full md:h-[450px] p-10">
        <article className="flex flex-col items-center justify-center  gap-2">
          <div className="my-8 text-center text-white font-semibold text-xl md:text-2xl">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic.</p>
          </div>
          <div className="border-1 bg-barraloop rounded-xl flex-shrink-0 w-full md:w-[750px] h-[170px] lg:w-[650] md:py-4 py-2 pl-2">
            <div
              className="text-center md:flex md:justify-center md:items-center md:mt-4
             "
            >
              <div>
                <h2 className="text-white text-left pl-4 md:text-2xl">
                  Stay in start loop
                </h2>
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

      <footer className="bg-black w-full h-[350px] text-white">
        <section className="grid grid-cols-3 justify-center items-center h-full p-4">
          <div className="">
            <h2 className="font-bold text-xl py-2">logo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              tenetur!
            </p>
            <span>@logo</span>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <h2 className="font-bold text-xl py-2">About us</h2>
            <span>Zeux</span>
            <span>Porfolio</span>
            <span>Careers</span>
            <span>Contac Us</span>
          </div>

          <div>
            <h2 className="text-xl font-bold py-2">logo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              tenetur!
            </p>

            <p>+988 89097 890</p>
          </div>
          <div className="col-span-4 border-b border-gray-100 "></div>
          <div></div>
          <h3 className="text-center w-full">
            &copy;Nozdov all right {new Date().getFullYear()}
          </h3>
        </section>
      </footer>
    </main>
  );
};

export default About;
