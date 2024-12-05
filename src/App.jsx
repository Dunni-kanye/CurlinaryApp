import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./route/router";


const router = createBrowserRouter([...ROUTES])
const App = () => {
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
};

export default App;
