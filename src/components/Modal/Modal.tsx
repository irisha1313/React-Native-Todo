import { typedNavigation } from '@/types';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../Buttons/Button';
interface IProps {
  navigation: typedNavigation;
}
export const Modal: FC<IProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
