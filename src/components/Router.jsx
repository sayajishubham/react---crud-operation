import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Private from "./Private";
import Description from "./Description";
import Add from "./Add";
import Edit from "./Edit";

function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/About"
        element={
          <Private>
            <About />
          </Private>
        }
      />
      <Route path="/Edit/:id" element={<Edit />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Description/:id" element={<Description />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default Router;
