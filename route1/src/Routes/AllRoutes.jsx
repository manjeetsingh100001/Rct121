import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import UserPage from "./UserPage";
import Users from "./Users";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />}>
          {/* <Route path=":id" element={<div>Nested Route</div>} /> */}
        </Route>
        <Route path="/users/:user_id" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
  