import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Portfolio = () => {
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
              className={
                location.pathname === "/portfolio" ? "text-orange-500" : ""
              }
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
    <main className="bg-gradient-to-b  text-white from-blue-900  to-blue-500 min-h-screen">
      <div className="text-black font-bold text-sm mb-4 flex justify-center items-center h-[20vh] ">
        {breadcrumbs.length > 0 && (
          <>
            <Link to="/">About</Link>
            <span className="mx-1">{String.fromCharCode(62)}</span>
          </>
        )}
        {breadcrumbs}
      </div>
      {/* Resto del contenido de la página */}
      <div className="text-center mb-12">
        <h1 className="mb-4 text-2xl font-bold text-left md:text-center md:text-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
          mollitia.
        </h1>
        <p className="text-left md:text-center font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="md:flex md:flex-row justify-around h-[350px] p-10">
        <div className="bg-barraloop flex md:w-[650px] md:h-[150px] rounded-md  flex-col md:flex-row justify-around">
          <div className="flex justify-center items-center relative p-4">
            <img src="./images/eclipse.png" alt="" />
            <div className="absolute inset-0 flex justify-center items-center -left-16">
              <img
                className="w-auto h-auto"
                src="./images/desktop.png"
                alt=""
              />
            </div>
            <div className="flex flex-col px-2">
              <h2 className="font-extrabold text-xl">90+</h2>
              <p className="py-2 font-medium">Clients</p>
            </div>
          </div>
          <div className="flex justify-center items-center relative p-4">
            <img src="./images/eclipse.png" alt="" />
            <div className="absolute inset-0 flex justify-center items-center  -left-16">
              <img
                className="w-auto h-auto"
                src="./images/desktop.png"
                alt=""
              />
            </div>
            <div className="flex flex-col px-2">
              <h2 className="font-extrabold text-xl">90+</h2>
              <p className="py-2 font-medium">Clients</p>
            </div>
          </div>
          <div className="flex justify-center items-center relative p-4">
            <img src="./images/eclipse.png" alt="" />
            <div className="absolute inset-0 flex justify-center items-center -left-16">
              <img
                className="w-auto h-auto"
                src="./images/desktop.png"
                alt=""
              />
            </div>
            <div className="flex flex-col px-2">
              <h2 className="font-extrabold text-xl">90+</h2>
              <p className="py-2 font-medium">Clients</p>
            </div>
          </div>
        </div>
      </div>

      <article className="w-full md:h-auto mt-12 p-10">
        <section className="grid md:grid-cols-2 md:justify-center md:items-center gap-4">
          <div>
            <img
              className="rounded-md md:h-[220px] h-[180px]"
              src="./images/img-4.png"
              alt=""
            />
          </div>

          <div className="py-10 h-[550px]">
            <h2 className="text-2xl font-bold eading-7 text-left p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
              dolor.
            </h2>
            <p className="py-10  text-justify eading-7 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus corporis distinctio consequuntur dolore
            </p>
            <ul>
              <li className="mt-2 flex items-center animate-bounce">
                <i className="bx bxs-check-circle text-green-500 mr-2"></i>
                Lorem, ipsum dolor.
              </li>
              <li className="mt-2 flex items-center animate-bounce">
                <i className="bx bxs-check-circle text-green-500 mr-2"></i>
                Lorem, ipsum dolor.
              </li>
              <li className="mt-2 flex items-center animate-bounce">
                <i className="bx bxs-check-circle text-green-500 mr-2"></i>
                Lorem, ipsum dolor.
              </li>
              <li className="mt-2 flex items-center animate-bounce">
                <i className="bx bxs-check-circle text-green-500 mr-2"></i>
                Lorem, ipsum dolor.
              </li>
            </ul>
          </div>
        </section>
      </article>

      <article className="md:grid md:grid-cols-2 md:gap-8 p-10">
        <section className="flex flex-col  justify-center items-center text-xl font-bold py-4 ">
          <div className="p-4 text-white w-full flex flex-col justify-center items-center ">
            <h1 className="text-left py-4 md:text-3xl leading-8 p-2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              temporibus.
            </h1>
            <p className=" leading-7 text-left text-sm  p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              vel quibusdam nulla tempora eius quo! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet vel quibusdam nulla tempora
              eius quo!
            </p>

            <div className="py-8 w-[100%]">
              <button
                className=" text-white bg-colorCnt hover:animate-pulse text-sm md:text-base py-2 px-4 md:py-3 md:px-6 "
                type="submit"
              >
                Get in touch
              </button>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <div>
            <img
              className="w-[450px] h-[350px]"
              src="./images/imgbout.png"
              alt=""
            />
          </div>
        </section>
      </article>

      <section className="w-full md:h-450px mt-20 p-10">
        <article className="text-white md:grid  md:grid-cols-2 justify-center items-center gap-4">
          <div className="flex justify-between items-center ">
            <img
              src="./images/sectionimg.png"
              className=" h-[380px] w-[450px] mt-16 pl-4"
              alt=""
            />
          </div>

          <div className="p-4">
            <h4 className="mb-4">Lorem, ipsum.</h4>
            <h2 className="mb-4 text-2xl font-bold ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quisquam molestiae rem veniam ut quos voluptas modi inventore ex
              in.
            </h2>

            <div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, saepe. Deleniti amet soluta dolore dolorem odit
                voluptatum error molestiae corporis voluptate neque asperiores
                ipsam magni voluptatibus quisquam labore, aut at?
              </p>
            </div>
          </div>
        </article>
      </section>

      <article className="md:grid md:grid-cols-2 md:gap-8  col-reverse p-10">
        <section className="flex flex-col  justify-center items-center text-xl font-bold py-4 ">
          <div className="p-4 text-white w-full flex flex-col justify-center items-center ">
            <h1 className="text-left py-4 md:text-3xl leading-8 p-2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              temporibus.
            </h1>
            <p className=" leading-7 text-left text-sm  p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              vel quibusdam nulla tempora eius quo! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet vel quibusdam nulla tempora
              eius quo!
            </p>

            <div className="py-8 w-[100%]">
              <button
                className=" text-white bg-colorCnt hover:animate-pulse text-sm md:text-base py-2 px-4 md:py-3 md:px-6 "
                type="submit"
              >
                Get in touch
              </button>
            </div>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="">
            <img
              className="w-[550px] h-[350px]"
              src="./images/img-6.png"
              alt=""
            />
          </div>
        </section>
      </article>

      <section className="bg-barraloop text-white w-full">
        <article className="flex justify-center items-center flex-col">
          <div className="p-4 text-center h-[350px] md:w-1/2">
            <h2 className="mt-10 text-4xl">
              Trusted by Thounsands of Happy Customer
            </h2>
            <h4 className="font-bold mt-12 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quisquam molestiae rem veniam ut quos voluptas modi inventore ex
              in.
            </h4>
          </div>

          <article className=" flex justify-center items-center gap-10 p-10 w-full flex-wrap">
            <div className="w-[350px] h-[200px] border-2 border-red-200  p-2">
              <div className="flex justify-evenly mb-2">
                <img className="rounded-full" src="./images/back1.jpg" alt="" />
                <div className="flex flex-col">
                  <h2>Viezn Robert</h2>
                  <p>Wasar, Poland</p>
                </div>
                <p className="flex items-center gap-2">4.5 <span className="text-sm">⭐</span></p>
              </div>
              <div className="mt-4">
                <p className="text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, expedita. Consequatur est eligendi iure impedit illo
                  doloremque quam quasi qui.
                </p>
              </div>
            </div>

            <div className="w-[350px] h-[200px] border-2 border-red-200 p-2">
              <div className="flex justify-around mb-2">
                <img className="rounded-full" src="./images/back1.jpg" alt="" />
                <div className="flex flex-col">
                  <h2>Viezn Robert</h2>
                  <p>Wasar, Poland</p>
                </div>
                <p className="flex items-center gap-2">4.5 <span className="text-sm">⭐</span></p>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, expedita. Consequatur est eligendi iure impedit illo
                  doloremque quam quasi qui.
                </p>
              </div>
            </div>

            <div className="w-[350px] h-[200px] border-2 border-red-200  p-2">
              <div className="flex justify-around mb-2">
                <img className="rounded-full" src="./images/back1.jpg" alt="" />
                <div className="flex flex-col">
                  <h2>Viezn Robert</h2>
                  <p>Wasar, Poland</p>
                </div>
                <p className="flex items-center gap-2">4.5 <span className="text-sm">⭐</span></p>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, expedita. Consequatur est eligendi iure impedit illo
                  doloremque quam quasi qui.
                </p>
              </div>
            </div>
          </article>
        </article>
      </section>
      <section className="w-full md:h-[450px] p-4">
        <article className="flex flex-col items-center justify-center  gap-2">
          <div className="my-8 text-center text-white font-semibold text-xl md:text-2xl">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic.</p>
          </div>
          <div className="border-1 bg-barraloop rounded-xl flex-shrink-0 w-full md:w-[750px] h-[170px] lg:w-[650] md: py-4 pl-2 ">
            <div
              className="text-center md:flex md:justify-center md:items-center md:mt-4
             "
            >
              <div>
                <h2 className="text-white text-left pl-4 md:text-2xl">
                  Stay in start loop
                </h2>
                <p className="text-white text-left pl-4 text-sm md:text-md">
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

export default Portfolio;
