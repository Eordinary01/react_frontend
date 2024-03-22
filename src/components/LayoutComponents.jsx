import React from "react";

const LayoutComponents = () => {
  return (
    <div>
      <nav id="sidebar">
        <div className="custom-menu">
          <button type="button" id="sidebarCollapse" className="btn btn-primary">
            <i className="fa fa-bars"></i>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
        <h1>
          <a href="#" className="logo">
            Management Project
          </a>
        </h1>
        <ul className="list-unstyled components mb-5">
          <li className="active">
            <a href="#">
              <span className="fa fa-home mr-3"></span> Homepage
            </a>
          </li>
           <li>
            <a href="#">
              <span className="fa fa-user mr-3"></span> Dashboard
            </a>
          </li>
          
          <li>
            <a href="#">
              <span className="fa fa-sticky-note mr-3"></span> Friends
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-sticky-note mr-3"></span> Subcription
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-paper-plane mr-3"></span> Settings
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-paper-plane mr-3"></span> Information
            </a>
          </li> 
        </ul>
      </nav>
    </div>
  );
};

export default LayoutComponents;