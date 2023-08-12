import React from 'react';

import {SafeAreaView, StatusBar, View, useColorScheme} from 'react-native';
import {createStyles} from './app.styles';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './navigation/main-stack';
import {StoreProvider, rootStore} from './store';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = createStyles(isDarkMode);

  return (
    <StoreProvider value={rootStore}>
      <SafeAreaView style={styles.safeAreaViewBack}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={styles.safeAreaViewBack.backgroundColor}
        />

        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
    </StoreProvider>
  );
}
