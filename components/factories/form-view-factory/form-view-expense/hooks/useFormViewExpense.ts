import {Expense} from '@ExpensesTracking/store/data/expanses';
import {useState} from 'react';

const useFormViewExpense = (expense?: Expense) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [currentUpdatedExpense, setcurrentUpdatedExpense] = useState(expense);

  return {
    openDatePicker,
    setOpenDatePicker,
    currentUpdatedExpense,
    setcurrentUpdatedExpense,
  };
};

export default useFormViewExpense;
