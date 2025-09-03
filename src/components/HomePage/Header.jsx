import React from "react";
import profileIcon from "../../assets/images/home-page/profile-icon.png";
import handshakeIcon from "../../assets/images/home-page/handshake-icon.png";
import notificationIcon from "../../assets/images/home-page/notification-icon.png";

export default function Header() {
  return (
    <>
        <header className="homePageHeaderContainer">
          <div className="headerDivContainer">
            <img src={profileIcon} alt="profile icon" className="profileIcon" />
            <h2 className="welcomeMessage">Welcome Back!</h2>
            <img
              src={handshakeIcon}
              alt="handshake icon"
              className="handshakeIcon"
            />
            <img
              src={notificationIcon}
              alt="notification icon"
              className="notificationIcon"
            />
          </div>
        </header>
    </>
  );
}
