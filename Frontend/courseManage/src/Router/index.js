import { useRoutes } from "react-router-dom";
import DefaultLayout from "../DefaultLayout";
import Home from "../Page/Home";
import Cart from "../Page/Cart";
import NotFound from "../Page/NotFound";

const AllRouters = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return routes; // Quan trọng! Phải return kết quả của useRoutes()
};

export default AllRouters;
