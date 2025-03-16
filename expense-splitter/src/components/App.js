import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FriendList from "./components/FriendList";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h1>Expense Splitter</h1>
          <ul className="nav-links">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/friends">Friends</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
            <li><Link to="/summary">Summary</Link></li>
          </ul>
        </nav>
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/friends" element={<FriendList />} />
            <Route path="/expenses" element={<ExpenseList />} />
            <Route path="/summary" element={<ExpenseSummary />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;