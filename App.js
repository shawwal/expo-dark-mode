import { NavigationContainer, DefaultTheme, DarkTheme, useTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const themeStatusBarStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppearanceProvider>
        <View style={[styles.container]}>
          {Platform.OS === 'ios' &&  <StatusBar barStyle={themeStatusBarStyle} />}
          <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme} linking={LinkingConfiguration}>
            <Stack.Navigator >
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </AppearanceProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#D0D0C0',
  },
  darkContainer: {
    backgroundColor: '#242C40',
  }
});
