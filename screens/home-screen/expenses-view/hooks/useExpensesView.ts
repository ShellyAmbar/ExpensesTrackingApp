import {useEffect, useState} from 'react';
import {Currency, Expense, ExpenseItem} from '../expenses-item/interfaces';
import {PopupType, UseExpensesViewProps} from './interfaces';
import {useStore} from '@ExpensesTracking/store';
import moment from 'moment';

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

  const createExpense = (newExpense: Expense) => {
    if (
      newExpense.amount?.length > 0 &&
      newExpense.date?.toString().length > 0 &&
      newExpense.name?.length > 0
    ) {
      const isDateIncludedInList =
        rootStore.user.expenses?.filter(
          item =>
            moment(item.date).format('DD/MM/YYYY') ===
            moment(newExpense.date).format('DD/MM/YYYY'),
        ).length > 0;
      if (!isDateIncludedInList) {
        newExpense.id = 0;
        const expenseItem: ExpenseItem = {
          id: rootStore.user.expenses?.length,
          date: newExpense.date,
          expenses: [newExpense as Expense],
        };
        rootStore.user.expenses.push(expenseItem);
      } else {
        const expensesItemIndex = rootStore.user.expenses?.findIndex(
          item =>
            moment(item.date).format('DD/MM/YYYY') ===
            moment(newExpense.date).format('DD/MM/YYYY'),
        );
        newExpense.id =
          rootStore.user.expenses[expensesItemIndex].expenses?.length;
        rootStore.user.expenses[expensesItemIndex].expenses.push(
          newExpense as Expense,
        );
      }
    }
  };

  const deleteExpenseItem = () => {
    const expensesItemWithExpense = rootStore.user.expenses?.filter(
      expensesItem => expensesItem.date === selectedExpanseToupdate?.date,
    );

    if (expensesItemWithExpense?.length > 0) {
      if (expensesItemWithExpense[0].expenses?.length === 1) {
        //delete all the expenses item
        rootStore.user.expenses = rootStore.user.expenses?.filter(
          expensesItem => expensesItem.date !== selectedExpanseToupdate?.date,
        );
      } else {
        //delete only one expense in the expenses item
        expensesItemWithExpense[0].expenses =
          expensesItemWithExpense[0].expenses?.filter(
            expense => expense.id !== selectedExpanseToupdate?.id,
          );
      }
    }
  };

  const updateExpense = (expenseToUpdate: Expense) => {
    const expensesItemWithExpense = rootStore.user.expenses?.filter(
      expensesItem => expensesItem.date === expenseToUpdate.date,
    );

    if (expensesItemWithExpense.length === 0) {
      //delete old expense -

      deleteExpenseItem();

      //creating new expenses item with the new date
      createExpense(expenseToUpdate);
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
    console.log(filters);

    if (filters.date) {
      filteredList = filteredList?.filter(expensesItem => {
        console.log(expensesItem.date, filters.date);
        return (
          moment(expensesItem.date).format('DD/MM/YYYY') ===
          moment(filters.date).format('DD/MM/YYYY')
        );
      });
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
