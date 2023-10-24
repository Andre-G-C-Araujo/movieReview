import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./app.routes";
import { AuthRouter } from "./auth.routes";

export const Routes = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
