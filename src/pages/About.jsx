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
      <div className="text-black font-bold text-sm mb-4">
        {breadcrumbs.length > 0 && (
          <>
            <Link to="/">Home</Link>
            <span className="mx-1">{String.fromCharCode(62)}</span>
          </>
        )}
        {breadcrumbs}
      </div>
      {/* Resto del contenido de la página "About us" */}
      <div className="md:grid md:grid-cols-2 md:gap-8 ">
        <section className="flex flex-col  justify-center items-center text-xl font-bold py-4 ">
          <div className="p-4">
            <h1 className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className=" leading-7 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              vel quibusdam nulla tempora eius quo!
            </p>
          </div>
        </section>
        <section>
          <div>
            <img className="" src="./images/imgbout.png" alt="" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
