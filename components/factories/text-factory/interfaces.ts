import {TextProps} from 'react-native';

export default interface TextFactoryProps extends TextProps {
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body-text1'
    | 'body-text2'
    | 'body-text3'
    | 'main-title'
    | 'label'
    | 'body-text-small';
}
