import {useEffect, useState} from 'react';
import {Currency, Expense, ExpenseItem} from '../expenses-item/interfaces';
import {PopupType, UseExpensesViewProps} from './interfaces';

const list: ExpenseItem[] = [
  {
    id: 0,
    date: '2/2/2022',
    expenses: [
      {id: 0, name: '1', amount: 20, currency: Currency.Dolar},
      {id: 1, name: '2', amount: 20, currency: Currency.Dolar},
    ],
  },
  {
    id: 1,
    date: '2/3/2022',
    expenses: [
      {id: 0, name: '1', amount: 20, currency: Currency.Dolar},
      {id: 1, name: '2', amount: 20, currency: Currency.Dolar},
    ],
  },
];
const useExpensesView = (props?: UseExpensesViewProps) => {
  const [expenses, setExpenses] = useState<ExpenseItem[]>(list);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [visiblePopup, setVisiblePopup] = useState(PopupType.Empthy);
  const [selectedExpanseToupdate, setSelectedExpanseToupdate] =
    useState<Expense>();

  const getTotalExpenses = () => {
    let totalExpenses = 0;
    for (let i = 0; i < expenses.length; i++) {
      const sum = expenses[i].expenses.reduce((acc, obj) => {
        return acc + obj.amount;
      }, 0);

      totalExpenses += sum;
    }

    return totalExpenses;
  };

  useEffect(() => {
    const total = getTotalExpenses();
    setTotalExpenses(total);
  }, [expenses.length.toString()]);

  return {
    expenses,

    totalExpenses,
    visiblePopup,
    setVisiblePopup,
    selectedExpanseToupdate,
    setSelectedExpanseToupdate,
  };
};

export default useExpensesView;
