import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./UI/RootLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import NewProfilePage from "./pages/NewProfilePage/NewProfilePage";

import DashboardRoot from "./UI/DashboardRoot";
import Home from "./pages/DashboardPage/Dashboard/Home/Home";
import CalorieTracker from "./pages/DashboardPage/Dashboard/CalorieTracker/CalorieTracker";
import WeightTracker from "./pages/DashboardPage/Dashboard/WeightTracker/WeightTracker";
import ActivityTracker from "./pages/DashboardPage/Dashboard/ActivityTracker/ActivityTracker";
import MealPlanner from "./pages/DashboardPage/Dashboard/MealPlanner/MealPlanner";
import DailyOverview from "./pages/DashboardPage/Dashboard/DailyOverview/DailyOverview";

import { profileCollectionLoader } from "./UI/DashboardRoot";
import { createProfileAction } from "./pages/NewProfilePage/NewProfilePage";

import { calorieIntakeLoader } from "./pages/DashboardPage/Dashboard/CalorieTracker/CalorieTracker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "/new-profile",
        element: <NewProfilePage />,
        action: createProfileAction,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardRoot />,
    children: [
      { index: true, element: <Home />, loader: calorieIntakeLoader },
      {
        path: "calorie-tracker",
        element: <CalorieTracker />,
      },
      { path: "weight-tracker", element: <WeightTracker /> },
      { path: "activity-tracker", element: <ActivityTracker /> },
      { path: "meal-planner", element: <MealPlanner /> },
      { path: ":date", element: <DailyOverview /> },
    ],
    loader: profileCollectionLoader,
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
