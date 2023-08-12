import {useState} from 'react';

const useDatePicker = (date?: Date) => {
  const [selectedDate, setSelectedDate] = useState(date ? date : new Date());
  return {
    selectedDate,
    setSelectedDate,
  };
};

export default useDatePicker;
