const CalculationService = {
  calculateBalances: (expenses, friends) => {
    let balances = {};
    
    friends.forEach(friend => {
      balances[friend.name] = 0;
    });

    expenses.forEach(expense => {
      const amountPerPerson = expense.amount / friends.length;
      
      friends.forEach(friend => {
        if (friend.name !== expense.payer) {
          balances[friend.name] -= amountPerPerson;
          balances[expense.payer] += amountPerPerson;
        }
      });
    });

    return balances;
  }
};

export default CalculationService;