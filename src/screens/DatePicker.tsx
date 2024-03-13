import { SmallButton, TackItem } from '@/components';
import Icon from '@/components/Icon/Icon';
import Colors from '@/constants/Colors';
import { useAppSelector } from '@/hooks';
import { selectTodoListByDate } from '@/store/slises/TodoSlice';
import { IcomoonIconsName, typedNavigation } from '@/types';
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export const DATE_FORMAT = 'L';

interface IProps {
  navigation: typedNavigation;
}
export const DatePicker: FC<IProps> = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const todoList = useAppSelector(
    selectTodoListByDate(moment(date).format(DATE_FORMAT)),
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: Colors.primary,
        color: Colors.white,
      },
      title: `${moment(date).format('DD-MM-YYYY')}`,
      headerRight: () => (
        <Pressable onPress={showDatePicker}>
          <Icon name={IcomoonIconsName.EVENT} color={Colors.white} />
        </Pressable>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {todoList.length === 0 ? (
          <View style={styles.info}>
            <Text>You have no Tasks for today </Text>
            <View style={{ flex: 1 }} />
            <View
              style={{
                bottom: useSafeAreaInsets().bottom,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <SmallButton
                title="Create tack"
                onPress={() => navigation.navigate('CreateTask')}
              />
              <SmallButton
                title="See all tacks"
                onPress={() => navigation.navigate('AllTasks')}
              />
            </View>
          </View>
        ) : (
          <ScrollView>
            <View style={styles.todoContainer}>
              {todoList.map(item => (
                <TackItem item={item} key={item.id} index={0} />
              ))}
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  todoContainer: {
    borderRadius: 24,
  },
  info: {
    flex: 1,
  },
  input: { backgroundColor: 'red' },
});
