import React from "react";
import { useNavigate } from "react-router-dom";
import homeIcon from "../../assets/images/home-page/home-icon.svg";
import searchIcon from "../../assets/images/home-page/search-icon.svg";
import walletIcon from "../../assets/images/home-page/wallet-icon.svg";
import profileIcon from "../../assets/images/home-page/profile.svg";


export default function Footer() {
  const navigate = useNavigate()
  return (
    <>
      <footer className="homePageFooterContainer">
        <div className="homePageFooterIconsContainer">
          <div onClick={() => navigate("/home")}>
            <img src={homeIcon} alt="home icon" />
            <h4>Home</h4>
          </div>

          <div>
            <img src={searchIcon} alt="search icon" />
            <h4>Search</h4>
          </div>

          <div>
            <img src={walletIcon} alt="wallet icon" />
            <h4>Wallet</h4>
          </div>

          <div>
            <img src={profileIcon} alt="profile icon" />
            <h4>Profile</h4>
          </div>
        </div>
      </footer>
    </>
  );
}
