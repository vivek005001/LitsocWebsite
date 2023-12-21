import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/litsoc.png";
import UhllekhLogo from "../images/uhllekh.png";
import TsodLogo from "../images/tsod.png";
import QurosityLogo from "../images/qurosity.png";
import GriffinsightLogo from "../images/griffin.png";

function Navbar() {
  const linkStyle = {
    color: "rgba(160, 160, 160, 1)",
  };

  const [clubLogo, setClubLogo] = useState(logo);
  const [showHomeTab, setShowHomeTab] = useState(false);

  const handleClubClick = (clubLogo) => {
    setClubLogo(clubLogo);
    setShowHomeTab(true);
  };

  const handleHomeClick = () => {
    setShowHomeTab(false);
    setClubLogo(logo); // Set the logo back to Litsoc when Home is clicked
  };

  return (
    <header className="fixed top-0 w-full bg-black z-50">
      <div className="flex items-center p-4 py-8 mb-10 mt-2 h-14 mx-auto max-w-7xl text-white">
        <Link to="/" className="cursor-pointer">
          <img src={clubLogo} alt="logo" className="w-40 pr-2 my-1 ml-2" />
        </Link>

        <div className="flex justify-end items-center flex-grow ml-4">
          {showHomeTab && (
            <Link
              to="/"
              style={{
                color: "black", // Text color
                backgroundColor: "white", // Background color
              }}
              onClick={handleHomeClick}
              className="mx-2 h-8 px-6 py-1 rounded transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase"
            >
              HOME
            </Link>
          )}

          <Link
            to="/Griffinsight"
            style={linkStyle}
            onClick={() => handleClubClick(GriffinsightLogo)}
            className="mx-2 h-8 px-6 py-1 rounded transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase"
          >
            GRIFFINSIGHT
          </Link>

          <Link
            to="/Qurosity"
            style={linkStyle}
            onClick={() => handleClubClick(QurosityLogo)}
            className="mx-2 h-8 px-6 py-1 rounded transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase"
          >
            QUROSITY
          </Link>

          <Link
            to="/Tsod"
            style={linkStyle}
            onClick={() => handleClubClick(TsodLogo)}
            className="mx-2 h-8 px-6 py-1 rounded transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase"
          >
            TSOD
          </Link>

          <Link
            to="/Uhllekh"
            style={linkStyle}
            onClick={() => handleClubClick(UhllekhLogo)}
            className="mx-2 h-8 px-6 py-1 rounded transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase"
          >
            UHLLEKH
          </Link>

          <Link
            to="/About"
            style={linkStyle}
            onClick={() => handleClubClick(logo)}
            className="mx-2 h-8 px-6 py-1 rounded transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase"
          >
            ABOUT
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
