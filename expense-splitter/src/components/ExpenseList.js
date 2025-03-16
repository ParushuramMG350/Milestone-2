import React, { useState } from "react";
import "./ExpenseList.css";

const ExpenseList = ({ expenses, setExpenses, friends }) => {
  const [amount, setAmount] = useState("");
  const [payer, setPayer] = useState("");
  const [description, setDescription] = useState("");

  const addExpense = () => {
    if (amount > 0 && payer && description.trim()) {
      setExpenses([...expenses, { id: Date.now(), amount, payer, description }]);
      setAmount("");
      setPayer("");
      setDescription("");
    }
  };

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount"
      />
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description"
      />
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="">Select Payer</option>
        {friends.map(friend => (
          <option key={friend.id} value={friend.name}>{friend.name}</option>
        ))}
      </select>
      <button onClick={addExpense}>Add Expense</button>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.description}: ${expense.amount} (Paid by {expense.payer})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;