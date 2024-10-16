// Layout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet /> {/* This will render the routed page components */}
    </>
  );
};

export default Layout;
