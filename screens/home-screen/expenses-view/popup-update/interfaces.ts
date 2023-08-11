import {Expense} from '../expenses-item/interfaces';

type PopupUpdateProps = {
  item?: Expense;
  onSubmit: () => void;
};
export default PopupUpdateProps;
