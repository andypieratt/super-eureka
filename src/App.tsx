import { StyledEngineProvider } from "@mui/system";
import React from "react";
import CustomRouter from "./CustomRouter";
import { history as customHistory } from "./utils/history";
import CustomRoutes from "./core/routes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CustomRouter history={customHistory}>
        <CustomRoutes />
      </CustomRouter>
    </StyledEngineProvider>
  );
}

export default App;
