import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './auth-screen.styles';
import TextInput from '@ExpensesTracking/components/controllers/text-input/text-input';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';

export default function AuthScreen(props) {
  const onPressLogin = () => {
    props.navigation?.replace('Main');
  };
  return (
    <Box
      scroll
      contentContainerStyle={styles.contentContainer}
      style={styles.container}>
      <Box style={styles.rectBorderStatusBar} />
      <Box style={styles.content}>
        <TextInput
          onChangeText={() => {}}
          style={styles.textInput}
          placeholder="Enter Name"
          placeholderTextColor={styles.textInputPlaceHolder.color}
        />
        <Spacer size={228} />
      </Box>
      <Box style={styles.bottom}>
        <Box style={styles.rectBorder}>
          <ButtonFactory onPress={onPressLogin} label="Login" type="primary" />
        </Box>
        <Spacer size={62} />
      </Box>
    </Box>
  );
}
