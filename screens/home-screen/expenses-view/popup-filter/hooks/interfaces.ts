enum EnumFilters {
  Title,
  Amount,
  Date,
}

type UsePopupFilterProps = {};
type FilterValue = string | number | Date;
type Filters = {
  date?: Date;
  title?: string;
  amount?: string;
};

export {EnumFilters, UsePopupFilterProps, FilterValue, Filters};
