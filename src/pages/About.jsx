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
    <main>
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
          <div className="bg-black border text-white border-red-100 w-[350px] h-[350px] rounded-xl p-4">
            <div className="py-4 ml-4 bg-aboutcolr w-[100px]">
              <h2 className="rounded-full text-sm text-center">
                Lorem ipsum dolor
              </h2>
            </div>
            <div className="mt-10">
              <h2>lorem lorem lorem</h2>
              <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor saepe deserunt eaque dolores ea.
              </p>
            </div>
          </div>

          <div className="bg-black border border-red-100 w-[350px] h-[350px] rounded-xl"></div>

          <div className="bg-black border border-red-100 w-[350px] h-[350px] rounded-xl"></div>
        </article>
      </section>
    </main>
  );
};

export default About;
