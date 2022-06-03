import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import PrivateRoute from "./PrivateRoute";
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
        <Route
          path="/users"
          element={
            <PrivateRoute to="/login">
              <Users />
            </PrivateRoute>
          }
        >
          {/* <Route path=":id" element={<div>Nested Route</div>} /> */}
        </Route>
        <Route
          path="/users/:user_id"
          element={
            <PrivateRoute to="/login">
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default AllRoutes;

// 1. Create Routes