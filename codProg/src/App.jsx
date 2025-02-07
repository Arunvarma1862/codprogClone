import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./Layout/RootLayout";
import {Home} from "./Pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<RootLayout/>}>
      <Route index  element={<Home/>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
