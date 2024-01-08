import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./UI/RootLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import NewProfilePage from "./pages/NewProfilePage/NewProfilePage";

import DashboardRoot from "./UI/DashboardRoot";
import Home from "./components/Dashboard/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/new-profile", element: <NewProfilePage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardRoot />,
    children: [{ path: "", element: <Home /> }],
  },
]);

function App() {
  return (
    //App container
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
