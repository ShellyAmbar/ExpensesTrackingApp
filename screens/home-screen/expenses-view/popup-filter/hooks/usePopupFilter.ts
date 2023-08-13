import {useEffect, useState} from 'react';
import {
  FilterValue,
  EnumFilters,
  Filters,
  UsePopupFilterProps,
} from './interfaces';
import {rootStore} from '@ExpensesTracking/store';

const usePopupFilter = (props?: UsePopupFilterProps) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Filters>({});

  useEffect(() => {
    setSelectedFilters({...rootStore.user.filters});
  }, []);

  const updateFilters = (type: EnumFilters, value: FilterValue) => {
    console.log(type, value);
    switch (type) {
      case EnumFilters.Amount:
        selectedFilters.amount = value as string;
        setSelectedFilters({...selectedFilters});
        break;
      case EnumFilters.Date:
        selectedFilters.date = value as Date;
        setSelectedFilters({...selectedFilters});
        break;
      case EnumFilters.Title:
        console.log('title change');

        selectedFilters.title = value as string;
        setSelectedFilters({...selectedFilters});
        break;
    }
  };

  const cleanSelectedFilters = () => {
    rootStore.user.filters = {};
    setSelectedFilters({});
  };

  return {
    updateFilters,
    setOpenDatePicker,
    openDatePicker,
    selectedFilters,
    setSelectedFilters,
    cleanSelectedFilters,
  };
};

export default usePopupFilter;
