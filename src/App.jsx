import React from "react";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default App;
