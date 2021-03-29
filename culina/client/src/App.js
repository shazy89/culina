import React from "react";
import { Button } from "react-bootstrap";

import Spinner from "./components/layout/Spinner";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Button className="button">Click ME</Button>
      <Spinner />
    </div>
  );
};

export default App;
