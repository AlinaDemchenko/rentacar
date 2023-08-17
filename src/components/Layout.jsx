import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  console.log('location: ', location);

  return (
    <div className={location.pathname === "/" ? "layout" : "screen"}>
        <Header/>
      <Suspense fallback={"error"}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
