import {useStore} from '@ExpensesTracking/store';
import {Expense, ExpenseItem} from '@ExpensesTracking/store/data/expanses';
import moment from 'moment';

const usePopupCreateExpense = () => {
  const root = useStore();
  const createExpense = (newExpense: Expense) => {
    if (
      newExpense.amount?.length &&
      newExpense.date &&
      newExpense.name &&
      newExpense.amount?.length > 0 &&
      newExpense.date?.toString()?.length > 0 &&
      newExpense.name?.length > 0
    ) {
      const isDateIncludedInList =
        root.user.expenses?.filter(
          item =>
            moment(item.date).format('DD/MM/YYYY') ===
            moment(newExpense.date).format('DD/MM/YYYY'),
        ).length > 0;
      if (!isDateIncludedInList) {
        newExpense.id = 0;
        const expenseItem: ExpenseItem = {
          id: root.user.expenses?.length,
          date: newExpense.date!!,
          expenses: [newExpense as Expense],
        };
        root.user.expenses.push(expenseItem);
      } else {
        const expensesItemIndex = root.user.expenses?.findIndex(
          item =>
            moment(item.date).format('DD/MM/YYYY') ===
            moment(newExpense.date).format('DD/MM/YYYY'),
        );
        newExpense.id =
          root.user.expenses[expensesItemIndex].expenses?.length + 1;
        root.user.expenses[expensesItemIndex].expenses.push(
          newExpense as Expense,
        );
      }
    }
  };
  return {
    createExpense,
  };
};

export default usePopupCreateExpense;
