import { Box } from "@mui/material";
import { RouteObject, useRoutes } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Box />,
    children: [],
  },
];

const CustomRoutes = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default CustomRoutes;
