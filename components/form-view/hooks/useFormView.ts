import {useState} from 'react';

const useFormView = () => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  return {
    openDatePicker,
    setOpenDatePicker,
  };
};

export default useFormView;
