import { RouteObject, useRoutes } from "react-router";
import NavContainer from "./components/NavContainer";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <NavContainer />,
    children: [],
  },
];

const CustomRoutes = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default CustomRoutes;
