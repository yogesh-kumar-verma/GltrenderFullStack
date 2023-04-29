import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Singlecomponent from "./pages/Singlecomponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/singlecomponent/:id"
            element={<Singlecomponent />}
          ></Route>
          <Route
            path="*"
            element={
              <>
                <br />
                <br />
                <Error />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
