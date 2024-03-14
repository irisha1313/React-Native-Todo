import { TackItem } from '@/components';
import Colors from '@/constants/Colors';
import { useAppSelector } from '@/hooks';
import React, { FC } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const ITEMHEIGTH = 90;
interface IProps {}
export const FFF: FC<IProps> = () => {
  const todos = useAppSelector(state => state.todos);
  return (
    <View style={{ paddingTop: 40 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        style={[styles.scrollView, { height: todos.length * ITEMHEIGTH }]}>
        {todos.map((item, index) => {
          if (!item.completed)
            return <TackItem item={item} index={index} key={item.id} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 30,
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.ligthBlue,
  },
  scrollView: {
    minHeight: 100,
    maxHeight: 420,
    borderRadius: 30,
    backgroundColor: Colors.ligthBlue,
    borderColor: '#000',
    borderWidth: 1,
  },
});
