import React from "react";
import { useMediaQuery } from "react-responsive";
// import Logo from "../assets/images/png/logo.png";
import { headerData } from "./common/Helper";
const Header = () => {
  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const handldeOverlayActive = () => {
    document.body.classList.toggle("active-nav-overlay");
  };

  return (
    <>
      <div className="navbar-wrapper w-100">
        <Desktop>
          <div className="container container-modified d-flex justify-content-between align-items-center">
            <div className="nav-logo w-100 cursor_pointer ">
              {/* <img src={Logo} alt="Logo" /> */}
            </div>
            <div className="nav-list-items w-100">
              <ul className="list-unstyled d-flex align-items-center m-0 px-4">
                {headerData.map((obj, index) => (
                  <li className="pe-3 me-3" key={index}>
                    <a
                      className="text-decoration-none navbar-link"
                      href={obj.path}
                    >
                      {obj.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Desktop>

        <BeforeDesktop>
          <div className="px-3 d-flex justify-content-between align-items-center py-2">
            <div className="nav-logo">
              {/* <img
                className="nav-logo-small cursor-pointer"
                src={Logo}
                alt="logo"
              /> */}
            </div>
            <div className="d-md-block justify-content-end d-none"></div>
            <div
              id="nav-icon1"
              className={`hamburger-menu`}
              onClick={() => handldeOverlayActive()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={`navbar-overlay`}>
            <ul className="h-100 list-unstyled d-flex flex-column align-items-center justify-content-center m-0">
              {headerData.map((obj, index) => (
                <li
                  key={index}
                  className="py-2"
                  onClick={() => handldeOverlayActive()}
                >
                  <a
                    className=" navbar-link text-decoration-none overlay_links"
                    href={obj.path}
                  >
                    {obj.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </BeforeDesktop>
      </div>
    </>
  );
};

export default Header;
