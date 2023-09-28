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
    <main>
      <div className="text-black font-bold text-sm mb-4">
        {breadcrumbs.length > 0 && (
          <>
            <Link to="/">About</Link>
            <span className="mx-1">{String.fromCharCode(62)}</span>
          </>
        )}
        {breadcrumbs}
      </div>
      {/* Resto del contenido de la página */}
      <h1>Portfolio</h1>
      <p>This is the "Portfolio" page.</p>
    </main>
  );
};

export default Portfolio;
