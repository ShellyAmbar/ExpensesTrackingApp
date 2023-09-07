import {TextStyle} from 'react-native';

interface Precentage {
  value: number;
  color: string;
  id: number;
  name?: string;
}
type DonutChartProps = {
  precentegs?: Precentage[];
  radius?: number;
  strokeWidth?: number;
  duration?: number;
  backColor?: string;
  textColor?: string;

  strokeLinecap?: string;
  rotation?: number;
  isCemiCircle?: boolean;
  isShowDescription?: boolean;
  isShowTotalValue?: boolean;
  totalValueStyle?: TextStyle;
  textDescriptionStyle?: TextStyle;
  valueDescriptionStyle?: TextStyle;
};

export {Precentage, DonutChartProps};
