import { IcomoonIconsName } from '@/types';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { HeaderButton } from '../Buttons/HeaderButton';
interface IProps {
  props: NativeStackHeaderProps;
}
export const CreateTaskHeader: FC<IProps> = ({ props }) => {
  return (
    <View
      style={{
        height: 130,
        backgroundColor: '#4A3780',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <HeaderButton
        navigation={props.navigation}
        name={IcomoonIconsName.BACK}
        size={18}
      />
      <Text
        style={{
          top: 20,
          color: '#fff',
          fontWeight: '600',
          fontSize: 16,
        }}>
        Add New Tasks
      </Text>
    </View>
  );
};
