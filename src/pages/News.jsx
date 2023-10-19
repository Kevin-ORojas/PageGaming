import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const News = () => {
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
              className={location.pathname === "/news" ? "text-orange-500" : ""}
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
    <main className="min-h-screen bg-gradient-to-tl from-black via-blue-700 to-blue-500 p-10">
      <div className="text-black font-bold text-sm mb-4 flex justify-center items-center h-[20vh] ">
        {breadcrumbs.length > 0 && (
          <>
            <Link to="/">Portfolio</Link>
            <span className="mx-1">{String.fromCharCode(62)}</span>
          </>
        )}
        {breadcrumbs}
      </div>
      <section className="w-full min-h-[300px]">
        <article className="text-center">
          <h1 className="mb-4 text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius
            autem, quo qui vero recusandae!
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className="mt-10 w-full flex justify-center items-center gap-2 ">
            <i className="bx bx-search-alt-2"></i>
            <input
              className="w-[250px] placeholder:text-white placeholder:p-2 bg-[#1C140F] h-8 rounded-md b"
              type="text"
              placeholder="Search"
            />
          </div>
        </article>
      </section>

      <article className="grid md:grid-cols-2  w-full p-10 gap-6 text-white ">
        <section className="flex justify-center items-center flex-col">
          <img
            className="rounded-xl w-[350px] h-[150px]"
            src="./images/sectionimg.png"
            alt=""
          />

          <h2 className="text-left lg:px-20 text-md leading-8 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            veniam vitae voluptatem, assumenda minus enim. Praesentium nesciunt
            dolor ab explicabo!
          </h2>
        </section>

        <section className="">
          <div className="flex">
            <img
              className="rounded-md w-[300px] h-[150px]"
              src="./images/layer1.png"
              alt=""
            />
            <div className="text-left text-md leading-8 pl-2 flex flex-col">
              <div className="flex justify-around">
                <p className="bg-orange-400 w-[100px] h-10 text-center rounded-md">
                  John Smash
                </p>
                <span className="">5.s</span>
              </div>
              <h2 className="mt-4 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae
              </h2>
            </div>
          </div>
        </section>
      </article>

      <article className="grid md:grid-cols-2  w-full p-10 gap-6 text-white ">
        <section className="flex justify-center items-center flex-col">
          <img
            className="rounded-xl w-[350px] h-[150px]"
            src="./images/sectionimg.png"
            alt=""
          />

          <h2 className="text-left lg:px-20 text-md leading-8 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            veniam vitae voluptatem, assumenda minus enim. Praesentium nesciunt
            dolor ab explicabo!
          </h2>
        </section>

        <section className="">
          <div className="flex">
            <img
              className="rounded-md w-[300px] h-[150px]"
              src="./images/layer2.png"
              alt=""
            />
            <div className="text-left text-md leading-8 pl-2 flex flex-col">
              <div className="flex justify-around">
                <p className="bg-orange-400 w-[100px] h-10 text-center rounded-md">
                  John Smash
                </p>
                <span className="">5.s</span>
              </div>
              <h2 className="mt-4 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae
              </h2>
            </div>
          </div>
        </section>
      </article>

      <article className="grid md:grid-cols-2  w-full p-10 gap-6 text-white ">
        <section className="flex justify-center items-center flex-col">
          <img
            className="rounded-xl w-[350px] h-[150px]"
            src="./images/sectionimg.png"
            alt=""
          />

          <h2 className="text-left lg:px-20 text-md leading-8 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            veniam vitae voluptatem, assumenda minus enim. Praesentium nesciunt
            dolor ab explicabo!
          </h2>
        </section>

        <section className="">
          <div className="flex">
            <img
              className="rounded-md w-[300px] h-[150px]"
              src="./images/layer3.png"
              alt=""
            />
            <div className="text-left text-md leading-8 pl-2 flex flex-col">
              <div className="flex justify-around">
                <p className="bg-orange-400 w-[100px] h-10 text-center rounded-md">
                  John Smash
                </p>
                <span className="">5.s</span>
              </div>
              <h2 className="mt-4 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae
              </h2>
            </div>
          </div>
        </section>
      </article>

      <article className="grid md:grid-cols-2  w-full p-10 gap-6 text-white ">
        <section className="flex justify-center items-center flex-col">
          <img
            className="rounded-xl w-[350px] h-[150px]"
            src="./images/sectionimg.png"
            alt=""
          />

          <h2 className="text-left lg:px-20 text-md leading-8 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            veniam vitae voluptatem, assumenda minus enim. Praesentium nesciunt
            dolor ab explicabo!
          </h2>
        </section>

        <section className="">
          <div className="flex">
            <img
              className="rounded-md w-[300px] h-[150px]"
              src="./images/layer4.png"
              alt=""
            />
            <div className="text-left text-md leading-8 pl-2 flex flex-col">
              <div className="flex justify-around">
                <p className="bg-orange-400 w-[100px] h-10 text-center rounded-md">
                  John Smash
                </p>
                <span className="">5.s</span>
              </div>
              <h2 className="mt-4 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae
              </h2>
            </div>
          </div>
        </section>
      </article>

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

export default News;
