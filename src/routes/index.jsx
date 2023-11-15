import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./app.routes";
import { AuthRouter } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export const Routes = () => {
  const { user } = useAuth();

  return <BrowserRouter>{user ? <AppRouter /> : <AuthRouter />}</BrowserRouter>;
};
