import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TopHeader from "./components/screens/TopHeader";
import SideNavBar from "./components/screens/SideNavBar";
import Footer from "./components/screens/Footer";
import Home from "./components/screens/Home";
import Dashboard from "./components/screens/Dashboard";
import AllDrivers from "./components/screens/AllDrivers";
import AllMerchants from "./components/screens/AllMerchants";
import SignIn from "./components/screens/SignIn";
import "./App.css";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <Router>
      {isSignedIn && <SideNavBar />}
      {isSignedIn && <TopHeader onSignOut={handleSignOut} />}
      <div className={isSignedIn ? "mainBody signedIn" : "mainBody"}>
        <Routes>
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
          {isSignedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/drivers" element={<AllDrivers />} />
              <Route path="/merchants" element={<AllMerchants />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/signin" />} />
          )}
        </Routes>
      </div>
      {isSignedIn && <Footer />}
    </Router>
  );
};

export default App;
