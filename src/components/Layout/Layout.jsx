import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar"

const Layout = () => {
  return (
    <>
      <AppBar />
      <main className="pages">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;