enum EnumFilters {
  Title = 0,
  Amount = 1,
  Date = 2,
}

type UsePopupFilterProps = {};
type FilterValue = string | number | Date;
type Filters = {
  date?: Date;
  title?: string;
  amount?: string;
};

export {EnumFilters, UsePopupFilterProps, FilterValue, Filters};
