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

          <h2 className="text-left px-20 text-md leading-8 p-2">
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
            <div className="text-left text-md leading-8 pl-2 flex-inline">
              <p className="bg-orange-400 w-[100px] text-center rounded-md flex justify-ar">
                John Smash
              </p>
             
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae
              </h2>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default News;
