const ExpenseService = {
  getExpenses: () => {
    const expenses = localStorage.getItem("expenses");
    return expenses ? JSON.parse(expenses) : [];
  },

  addExpense: (expense) => {
    const expenses = ExpenseService.getExpenses();
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  },

  removeExpense: (id) => {
    let expenses = ExpenseService.getExpenses();
    expenses = expenses.filter(exp => exp.id !== id);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
};

export default ExpenseService;