import {UsePopupFilterProps} from './interfaces';
import {rootStore} from '@ExpensesTracking/store';

const usePopupFilter = (props?: UsePopupFilterProps) => {
  const cleanSelectedFilters = () => {
    rootStore.user.filters = {};
  };

  return {
    cleanSelectedFilters,
  };
};

export default usePopupFilter;
