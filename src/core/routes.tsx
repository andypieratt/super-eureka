import { RouteObject, useRoutes } from "react-router";
import NavContainer from "./components/NavContainer";
import { Box } from "@mui/material";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <NavContainer />,
    children: [
      {
        path: "/resume",
        element: <Box />, // TODO: Remove and replace with resume once built
      },
      {
        path: "/contact",
        element: <Box />, // TODO: Remove and replace with contact once built
      },
    ],
  },
];

const CustomRoutes = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default CustomRoutes;
