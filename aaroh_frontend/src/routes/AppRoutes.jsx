import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Landing from "../pages/Landing/Landing";
import Explore from "../pages/Explore/Explore";
import InnovationDetails from "../pages/Innovation/InnovationDetails";
import SubmitInnovation from "../pages/Submit/SubmitInnovation";
import Challenges from "../pages/Challenges/Challenges";
import Community from "../pages/Community/Community";
import Profile from "../pages/Profile/Profile";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Features from "../pages/Features/Features";
import Universities from "../pages/Universities/Universities";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>

        {/* Landing */}
        <Route index element={<Landing />} />


        {/* AAROH Platform */}

        <Route
          path="explore"
          element={<Explore />}
        />


        <Route
          path="innovation/:id"
          element={<InnovationDetails />}
        />


        <Route
          path="submit"
          element={<SubmitInnovation />}
        />


        <Route
          path="challenges"
          element={<Challenges />}
        />


        <Route
          path="community"
          element={<Community />}
        />


        <Route
          path="profile"
          element={<Profile />}
        />


        {/* About AAROH */}
        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="login"
          element={<Login />}
        />

        <Route
          path="features"
          element={<Features />}
        />

        <Route
          path="universities"
          element={<Universities />}
        />

      </Route>


    </Routes>
  );
}


export default AppRoutes;