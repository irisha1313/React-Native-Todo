import Colors from '@/constants/Colors';
import React, { FC } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
interface IProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}
export const SmallButton: FC<IProps> = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text
        style={{
          color: Colors.white,
          fontWeight: '700',
          fontSize: 20,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  btn: {
    maxWidth: 190,

    width: '100%',
    borderRadius: 20,
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderColor: Colors.ligthBlue,
    borderWidth: 1,
    alignItems: 'center',
  },
});
