import React from 'react';
import {Box} from '../controllers/box/box';
import TextFactory from '../factories/text-factory/text-factory';
import Spacer from '../controllers/spacer/spacer';
import TextInput from '../controllers/text-input/text-input';
import ButtonFactory from '../factories/button-factory/button-factory';
import styles from './form-view.styles';
import {FormViewProps} from './interfaces';

const FormView = ({
  children,
  properties,
  onClickConfirm,
  title,
  spacerBetweenProperties,
  buttonName,
  ...props
}: FormViewProps) => {
  return (
    <Box style={styles.container}>
      {title && <TextFactory style={styles.titel}>{title}</TextFactory>}

      {properties?.map((propertie, index) => {
        return (
          <>
            <TextInput
              label={propertie.label ?? ''}
              lableStyle={propertie.labelStyle ?? {}}
              placeholder={propertie.name}
              inputStyle={propertie.inputStyle}
              placeholderTextColor={propertie.placeholderTextColor}
              onChangeText={propertie.onChangeText}
              onPressIn={propertie.onPressIn}
              value={propertie.value}
              defaultValue={propertie.defaultValue}
            />
            {index !== properties.length - 1 && (
              <Spacer size={spacerBetweenProperties} />
            )}
          </>
        );
      })}

      {children}
      {buttonName && (
        <ButtonFactory
          type="primary"
          label={buttonName}
          onPress={onClickConfirm}
        />
      )}
    </Box>
  );
};

export default FormView;
