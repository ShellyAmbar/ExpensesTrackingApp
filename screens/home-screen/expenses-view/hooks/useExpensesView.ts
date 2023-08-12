import {useEffect, useState} from 'react';
import {Currency, Expense, ExpenseItem} from '../expenses-item/interfaces';
import {PopupType, UseExpensesViewProps} from './interfaces';
import {useStore} from '@ExpensesTracking/store';

const useExpensesView = (props?: UseExpensesViewProps) => {
  const rootStore = useStore();
  const [visiblePopup, setVisiblePopup] = useState(PopupType.Empthy);
  const [selectedExpanseToupdate, setSelectedExpanseToupdate] =
    useState<Expense>();
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);

  const getTotalExpenses = () => {
    let totalExpenses = 0;
    for (let i = 0; i < rootStore.user.expenses?.length; i++) {
      const sum = rootStore.user.expenses[i].expenses?.reduce((acc, obj) => {
        return acc + Number(obj.amount);
      }, 0);

      totalExpenses += sum;
    }

    return totalExpenses;
  };

  const updateExpense = (expenseToUpdate: Expense) => {
    const expensesItemWithExpense = rootStore.user.expenses?.filter(
      expensesItem => expensesItem.date === expenseToUpdate.date,
    );

    if (expensesItemWithExpense.length === 0) {
      //creating new expenses item with the new date
      const newExpansesItem: ExpenseItem = {
        id: rootStore.user.expenses?.length,
        date: expenseToUpdate.date,
        expenses: [expenseToUpdate],
      };
      rootStore.user.expenses.push(newExpansesItem);
    } else {
      //update exist item
      const expenseIndexInList = expensesItemWithExpense[0].expenses?.findIndex(
        expense => expense.id === expenseToUpdate.id,
      );

      expensesItemWithExpense[0].expenses[expenseIndexInList] = expenseToUpdate;
    }
  };

  const filterExpenses = () => {
    const filters = rootStore.user.filters;
    let filteredList = rootStore.user.expenses;
    if (filters.date) {
      filteredList = filteredList?.filter(
        expensesItem => expensesItem.date === filters.date,
      );
    }
    if (filters.titel) {
      filteredList = filteredList?.filter(expensesItem => {
        return (
          expensesItem?.expenses?.filter(item => item.name === filters.titel)
            .length > 0
        );
      });
    }
    if (filters.amount) {
      filteredList = filteredList?.filter(expensesItem => {
        return (
          expensesItem?.expenses?.filter(item => item.amount === filters.amount)
            .length > 0
        );
      });
    }
    setExpenses(filteredList);
  };

  const cleareFilters = () => {
    setExpenses(rootStore.user.expenses);
  };

  useEffect(() => {
    const total = getTotalExpenses();
    rootStore.user.setTotalExpenses(total);
    setExpenses(rootStore.user.expenses);
  }, [JSON.stringify(rootStore.user.expenses)]);

  return {
    rootStore,
    visiblePopup,
    setVisiblePopup,
    selectedExpanseToupdate,
    setSelectedExpanseToupdate,
    updateExpense,
    cleareFilters,
    expenses,
    filterExpenses,
  };
};

export default useExpensesView;
