const CalculationService = {
    calculateBalances: (expenses = [], friends = []) => {
      if (!expenses || !Array.isArray(expenses)) expenses = [];
      if (!friends || !Array.isArray(friends)) friends = [];
  
      let balances = {};
      
      // Initialize each friend with a balance of 0
      friends.forEach(friend => {
        balances[friend.id] = 0;
      });
  
      // Process each expense
      expenses.forEach(expense => {
        const { amount, payer, participants } = expense;
        const splitAmount = amount / participants.length;
  
        participants.forEach(participant => {
          if (participant !== payer) {
            balances[participant] = (balances[participant] || 0) - splitAmount;
            balances[payer] = (balances[payer] || 0) + splitAmount;
          }
        });
      });
  
      return balances;
    }
  };
  
  export default CalculationService;
  