import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Expense Splitter</h1>
      <nav>
        <Link to="/friends">Manage Friends</Link>
        <Link to="/expenses">Manage Expenses</Link>
        <Link to="/summary">View Summary</Link>
      </nav>
    </div>
  );
};

export default Dashboard;