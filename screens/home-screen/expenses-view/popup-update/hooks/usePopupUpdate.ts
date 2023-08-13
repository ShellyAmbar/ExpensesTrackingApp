import {Expense} from '@ExpensesTracking/store/data/expanses';
import {useState} from 'react';

const usePopupUpdate = ({expense}: {expense: Expense}) => {
  const [currentUpdatedExpense, setcurrentUpdatedExpense] = useState(expense);

  return {
    currentUpdatedExpense,
    setcurrentUpdatedExpense,
  };
};

export default usePopupUpdate;
