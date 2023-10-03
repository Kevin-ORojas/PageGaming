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
    <main className="bg-gradient-to-b p-10 text-white from-blue-900  to-blue-500 min-h-screen">
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
        <h1 className="mb-4 text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
          mollitia.
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>

      <div className="bg-barraloop md:flex w-full h-[350px] md:h-[150px] rounded-md flex flex-col md:flex-row justify-around">
        <div className="flex justify-center items-center relative">
          <img src="./images/eclipse.png" alt="" />
          <div className="absolute inset-0 flex justify-center items-center -left-16">
            <img className="w-auto h-auto" src="./images/desktop.png" alt="" />
          </div>
          <div className="flex flex-col px-2">
            <h2 className="font-extrabold text-xl">90+</h2>
            <p className="py-2 font-medium">Clients</p>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <img src="./images/eclipse.png" alt="" />
          <div className="absolute inset-0 flex justify-center items-center  -left-16">
            <img className="w-auto h-auto" src="./images/desktop.png" alt="" />
          </div>
          <div className="flex flex-col px-2">
            <h2 className="font-extrabold text-xl">90+</h2>
            <p className="py-2 font-medium">Clients</p>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <img src="./images/eclipse.png" alt="" />
          <div className="absolute inset-0 flex justify-center items-center -left-16">
            <img className="w-auto h-auto" src="./images/desktop.png" alt="" />
          </div>
          <div className="flex flex-col px-2">
            <h2 className="font-extrabold text-xl">90+</h2>
            <p className="py-2 font-medium">Clients</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
