import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import NewProfilePage from "./pages/NewProfilePage/NewProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/new-profile", element: <NewProfilePage /> },
    ],
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
