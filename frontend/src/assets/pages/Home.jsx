import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to CrowdFundIt</h1>
      <p className="lead">
        Start your campaign or support others in making ideas come true!
      </p>
      
      <div className="mt-4">
        <Link to="/register" className="btn btn-primary m-2">
          Get Started
        </Link>
        <Link to="/login" className="btn btn-outline-secondary m-2">
          Login
        </Link>
        <Link to="/projects" className="btn btn-success m-2">
          Explore Campaigns
        </Link>
      </div>
    </div>
  );
}

export default Home;
