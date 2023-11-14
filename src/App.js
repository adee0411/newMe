import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

import { Sheet, Typography } from "@mui/joy";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/UI/RootLayout";
import WelcomePage from "./pages/welcomePage/WelcomePage";
import CalorieCalculatorPage from "./pages/calorieCalculator/CalorieCalculatorPage";
import CalorieCustomizer from "./components/CalorieCustomizer/CalorieCustomizer";

import DashboardPage from "./pages/dashboardPage/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "/dashboard/calorie-calculator",
        element: (
          <Sheet>
            <Typography>Calorie Calculator</Typography>
          </Sheet>
        ),
      },
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
