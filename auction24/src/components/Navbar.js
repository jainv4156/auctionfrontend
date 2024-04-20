import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const nevigate = useNavigate();

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.setItem("user", "");
      props.setUser("");
      props.setUsername("");
      nevigate("/");
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Auction24
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/bidingpage">
                  Home
                </Link>
              </li>
              {props.user !== "" &&(

                <li className="nav-item">
                <Link className="nav-link" to="/result">
                  Results
                </Link>
              </li>
              ) }
            </ul>
            {props.user === "" ? (
              ""
            ) : (
              <div className="d-flex me-2">{props.user}</div>
            )}
            {props.user === "" ? (
              ""
            ) : (
              <button className="btn btn-outline-success" onClick={logout}>
                logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
