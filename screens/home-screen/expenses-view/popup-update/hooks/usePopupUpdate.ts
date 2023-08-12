import {View, Text} from 'react-native';
import React, {useState} from 'react';

const usePopupUpdate = () => {
  const [openDatePicker, setOpenDatePicker] = useState(false);

  return {
    openDatePicker,
    setOpenDatePicker,
  };
};

export default usePopupUpdate;
