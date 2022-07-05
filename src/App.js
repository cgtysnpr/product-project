import { Route, Routes } from "react-router-dom";
import GuestGuard from "./guards/GuestGuard";
import AuthGuard from "./guards/AuthGuard";
import { Suspense, lazy } from "react";
import LoadingScreen from "./components/LoadingScreen";
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <>
              <GuestGuard>
                <Login />{" "}
              </GuestGuard>
            </>
          }
        />
      </Routes>
    </>
  );
}
const Login = Loadable(lazy(() => import("./pages/login")));
