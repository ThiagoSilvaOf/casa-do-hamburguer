import { createBrowserRouter, Outlet } from "react-router";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#161410]">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
