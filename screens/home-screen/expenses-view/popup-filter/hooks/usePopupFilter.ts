import {useState} from 'react';
import {FilterValue, Filters, UsePopupFilterProps} from './interfaces';
import {useStore} from '@ExpensesTracking/store';

const usePopupFilter = (props?: UsePopupFilterProps) => {
  const store = useStore();
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const updateFilters = (type: Filters, value: FilterValue) => {
    switch (type) {
      case Filters.Amount:
        store.user.filters.amount = value as string;
      case Filters.Date:
        store.user.filters.date = value as Date;
      case Filters.Title:
        store.user.filters.titel = value as string;
    }
  };

  return {
    updateFilters,
    setOpenDatePicker,
    openDatePicker,
  };
};

export default usePopupFilter;
