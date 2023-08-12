import {useStore} from '@ExpensesTracking/store';
import {Expense, ExpenseItem} from '@ExpensesTracking/store/data/expanses';
import {useState} from 'react';

const usePopupCreateExpense = () => {
  const [newExpense, setNewExpense] = useState<Expense>({} as Expense);
  const root = useStore();
  const createExpense = () => {
    if (
      newExpense.amount?.length > 0 &&
      newExpense.date?.length > 0 &&
      newExpense.name?.length > 0
    ) {
      const isDateIncludedInList =
        root.user.expenses?.filter(item => item.date === newExpense?.date)
          .length > 0;
      if (!isDateIncludedInList) {
        newExpense.id = 0;
        const expenseItem: ExpenseItem = {
          id: root.user.expenses?.length,
          date: newExpense.date,
          expenses: [newExpense as Expense],
        };
        root.user.expenses.push(expenseItem);
      } else {
        const expensesItemIndex = root.user.expenses?.findIndex(
          item => item.date === newExpense?.date,
        );
        newExpense.id = root.user.expenses[expensesItemIndex].expenses?.length;
        root.user.expenses[expensesItemIndex].expenses.push(
          newExpense as Expense,
        );
      }
    }
  };
  return {
    newExpense,
    setNewExpense,
    createExpense,
  };
};

export default usePopupCreateExpense;
