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
    <main className="h-screen bg-gradient-to-tl from-black via-blue-700 to-blue-500">
      <div className="text-black font-bold text-sm mb-4 flex justify-center items-center h-[20vh] ">
        {breadcrumbs.length > 0 && (
          <>
            <Link to="/">Portfolio</Link>
            <span className="mx-1">{String.fromCharCode(62)}</span>
          </>
        )}
        {breadcrumbs}
      </div>
      <section>
        <article className="text-center">
          <h1 className="mb-4 text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius
            autem, quo qui vero recusandae!
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
      </section>
    </main>
  );
};

export default News;
