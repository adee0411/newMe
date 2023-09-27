import { Provider } from "react-redux";
import store from "./store/store";
import { Sheet } from "@mui/joy";
import "./App.css";

import CalorieCalculatorPage from "./pages/calorieCalculator/CalorieCalkulatorPage";

function App() {
  return (
    //App container
    <Provider store={store}>
      <Sheet
        color="neutral"
        variant="plain"
        sx={{
          p: 4,
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        <CalorieCalculatorPage />
      </Sheet>
    </Provider>
  );
}

export default App;
