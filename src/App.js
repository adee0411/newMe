import "./App.css";

import { ButtonGroup, NextUIProvider } from "@nextui-org/react";

import { Button } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Button isDisabled color="primary">
        Test button
      </Button>
      <ButtonGroup></ButtonGroup>
    </NextUIProvider>
  );
}

export default App;
