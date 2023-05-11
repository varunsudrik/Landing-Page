import React from "react";
import "../../../assets/Css/responsive.css";
import "../../../assets/Css/main.css";
import filter from "../../../assets/img/filter.svg";
import cart from "../../../assets/img/cart.svg";
import search from "../../../assets/img/search.svg";

function NavBar() {
  return (
    <header id="header-wrap">
      <nav
        class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar"
        style={{ backgroundColor: "white" }}
      >
        <div class="container">
          <a href="/" class="navbar-brand">
            Varun
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="lni-menu"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Others
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <img src={cart} alt="cart"></img>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <img src={search} alt="search"></img>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <img src={filter} alt="filter"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
