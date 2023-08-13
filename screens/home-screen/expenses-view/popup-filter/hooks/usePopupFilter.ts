import {useEffect, useState} from 'react';
import {
  FilterValue,
  EnumFilters,
  Filters,
  UsePopupFilterProps,
} from './interfaces';
import {rootStore} from '@ExpensesTracking/store';

const usePopupFilter = (props?: UsePopupFilterProps) => {
  const [selectedFilters, setSelectedFilters] = useState<Filters>({});

  useEffect(() => {
    setSelectedFilters({...rootStore.user.filters});
  }, []);

  const updateFilters = (type: EnumFilters, value: FilterValue) => {
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
    selectedFilters,
    setSelectedFilters,
    cleanSelectedFilters,
  };
};

export default usePopupFilter;
