import {useStore} from '@ExpensesTracking/store';
import {Expense, ExpenseItem} from '@ExpensesTracking/store/data/expanses';
import {useState} from 'react';

const usePopupCreateExpense = () => {
  const [newExpense, setNewExpense] = useState<Expense>({
    date: new Date(),
  } as Expense);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const root = useStore();
  const createExpense = () => {
    console.log(
      newExpense.amount?.length > 0 &&
        newExpense.date?.toString().length > 0 &&
        newExpense.name?.length > 0,
      newExpense.date,
    );

    if (
      newExpense.amount?.length > 0 &&
      newExpense.date?.toString().length > 0 &&
      newExpense.name?.length > 0
    ) {
      const isDateIncludedInList =
        root.user.expenses?.filter(
          item => item.date.toString() === newExpense?.date.toString(),
        ).length > 0;
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
          item => item.date.toString() === newExpense?.date.toString(),
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
    openDatePicker,
    setOpenDatePicker,
  };
};

export default usePopupCreateExpense;
