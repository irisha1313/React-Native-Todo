import Colors from '@/constants/Colors';
import { IcomoonIconsName, typedNavigation } from '@/types';
import { useNavigation } from '@react-navigation/native';
import dateFormat from 'dateformat';
import React, { FC } from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon/Icon';
interface IProps {}
export const Header: FC<IProps> = () => {
  const insets = useSafeAreaInsets(); ///longDate
  let today = new Date();
  const navigation = useNavigation<typedNavigation>();

  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        height: 220,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          top: insets.top,
        }}>
        <Text
          style={{ color: Colors.white, fontWeight: '600', marginBottom: 30 }}>
          {dateFormat(today, 'longDate')}
        </Text>
        <Pressable
          style={{ position: 'absolute', left: 10, top: 55 }}
          onPress={() => navigation.navigate('AllTasks')}>
          <Icon name={IcomoonIconsName.SHOWALL} size={23} color="#fff" />
        </Pressable>
        <Text style={{ color: Colors.white, fontWeight: '700', fontSize: 30 }}>
          My Todo List
        </Text>
        <Pressable
          style={{ position: 'absolute', right: 10, top: 55 }}
          onPress={() => navigation.navigate('DatePicker')}>
          <Icon name={IcomoonIconsName.EVENT} size={23} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
