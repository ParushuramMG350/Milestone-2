import React from "react";
import "./ExpenseSummary.css";
import CalculationService from "../services/CalculationService";

const ExpenseSummary = ({ expenses, friends }) => {
  const balances = CalculationService.calculateBalances(expenses, friends);

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>
      <ul>
        {Object.keys(balances).map(friend => (
          <li key={friend}>{friend} owes ${balances[friend]}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;