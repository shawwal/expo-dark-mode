import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useColorScheme } from 'react-native-appearance';

export default function LinksScreen() {

  const colorScheme = useColorScheme();
 const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <ScrollView style={[styles.container, themeContainerStyle]} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {

  const colorScheme = useColorScheme();
  const listStyle = colorScheme === 'light' ? styles.listLightColor : styles.listDarkColor;
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;

  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption, listStyle]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22}/>
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={[styles.optionText, themeTextStyle]}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    // backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  listLightColor: {
    backgroundColor: '#fdfdfd'
  },
  listDarkColor: {
    backgroundColor: '#8e8e93'
  },
  lightContainer: {
    backgroundColor: '#fdfdfd',
  },
  darkContainer: {
    backgroundColor: '#242C40',
  },
  lightThemeText: {
    color: '#000000',
  },
  darkThemeText: {
    color: '#ffffff',
  },
});
