import { IcomoonIconsName } from '@/types';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { HeaderButton } from '../Buttons/HeaderButton';
interface IProps {
  props: NativeStackHeaderProps;
}
export const AllTasksHeader: FC<IProps> = ({ props }) => {
  return (
    <View
      style={{
        height: 90,
        backgroundColor: '#4A3780',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <HeaderButton
        propsStyle={{
          top: 50,
          width: 30,
          height: 30,
          paddingLeft: 5,
        }}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
        navigation={props.navigation}
        name={IcomoonIconsName.CIRCLELEFT}
        size={13}
      />
      <Text
        style={{
          top: 25,
          color: '#fff',
          fontWeight: '600',
          fontSize: 16,
        }}>
        All tasks
      </Text>
    </View>
  );
};
