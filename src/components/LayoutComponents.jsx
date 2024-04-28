import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/" className="logo">
            Management Project
          </Link>
        </h1>
        <ul className="list-unstyled components mb-5">
          <li className="active">
            <Link to="/">
              <span className="fa fa-home mr-3"></span> Homepage
            </Link>
          </li>
           <li>
            <Link to="/product">
              <span className="fa fa-product-hunt mr-3"></span> Products
            </Link>
          </li>
          
          <li>
            <Link to="/">
              <span className="fa fa-sticky-note mr-3"></span> Friends
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="fa fa-sticky-note mr-3"></span> Subcription
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="fa fa-paper-plane mr-3"></span> Settings
            </Link>
          </li>
          <li>
            <Link  to="/">
              <span className="fa fa-paper-plane mr-3"></span> Information
            </Link>
          </li> 
          <li>
            <Link  to="/">
              <span className=" mr-3"></span> 
            </Link>
          </li> 
          <li>
            <Link  to="/">
              <span className=" mr-3"></span> 
            </Link>
          </li> 
          <li>
            <Link  to="/">
              <span className=" mr-3"></span> 
            </Link>
          </li> 
          <li>
            <Link  to="/">
              <span className=" mr-3"></span> 
            </Link>
          </li> 
          
        </ul>
      </nav>
    </div>
  );
};

export default LayoutComponents;
