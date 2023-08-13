import {useState} from 'react';
import {
  FilterValue,
  EnumFilters,
  Filters,
  UsePopupFilterProps,
} from './interfaces';

const usePopupFilter = (props?: UsePopupFilterProps) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Filters>({});
  const updateFilters = (type: EnumFilters, value: FilterValue) => {
    switch (type) {
      case EnumFilters.Amount:
        setSelectedFilters({...selectedFilters, amount: value as string});

      case EnumFilters.Date:
        setSelectedFilters({...selectedFilters, date: value as Date});
      case EnumFilters.Title:
        setSelectedFilters({...selectedFilters, title: value as string});
    }
  };

  return {
    updateFilters,
    setOpenDatePicker,
    openDatePicker,
    selectedFilters,
    setSelectedFilters,
  };
};

export default usePopupFilter;
