import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './auth-screen.styles';
import TextInput from '@ExpensesTracking/components/controllers/text-input/text-input';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import {useStore} from '@ExpensesTracking/store';
import useAuthScreen from './hooks/useAuthScreen';

export default function AuthScreen(props) {
  const rootStore = useStore();
  const {} = useAuthScreen({navigation: props.navigation});
  const onPressLogin = () => {
    if (rootStore.user.fullName?.length > 0) {
      rootStore.user.setIsLoggedIn(true);
      props.navigation?.navigate('Main');
    }
  };
  const onChangeText = (text: string) => {
    if (text?.length > 0) {
      rootStore.user.setFullName(text);
    }
  };
  return (
    <Box
      scroll
      contentContainerStyle={styles.contentContainer}
      style={styles.container}>
      <Box style={styles.content}>
        <TextInput
          onChangeText={onChangeText}
          inputStyle={styles.textInput}
          placeholder="Enter Name"
          placeholderTextColor={styles.textInputPlaceHolder.color}
        />
        <Spacer size={228} />
      </Box>
      <Box style={styles.bottom}>
        <ButtonFactory onPress={onPressLogin} label="Login" type="primary" />

        <Spacer size={62} />
      </Box>
    </Box>
  );
}
