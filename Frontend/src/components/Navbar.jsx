import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://vark.fbrk.in/assets/images/fabrik_full_logo.png
"
              alt=""
              width="150"
              height="34"
            />{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <h1></h1>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/singlecomponent/123">
                  Something
                </Link>
              </li>
              {/* <div className="d-block d-md-none"> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/login ">
                  Login <FontAwesomeIcon icon={faRightToBracket} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/register">
                  Register <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
              {/* </div> */}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
