import {useState} from 'react';

const useFormViewExpense = () => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  return {
    openDatePicker,
    setOpenDatePicker,
  };
};

export default useFormViewExpense;
