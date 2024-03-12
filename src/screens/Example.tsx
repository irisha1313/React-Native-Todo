import { TackItem } from '@/components';
import Icon from '@/components/Icon/Icon';
import { useAppSelector } from '@/hooks';
import { IcomoonIconsName } from '@/types';
import moment from 'moment';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const Example = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [date, setDate] = useState(new Date());
  const todos = useAppSelector(state => state.todos);

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

  const todoStatus = useAppSelector(state => state.status);
  // const date = useAppSelector(state => state.date);
  ////

  const filteredTodoByStatus = () => {
    if (todoStatus === 1) {
      return todos.filter(todo => todo.completed);
    } else if (todoStatus === 2) {
      return todos.filter(todo => !todo.completed);
    } else if (todoStatus === 0) {
      return todos;
    }
  };

  const currentDate = moment(date).format('l');
  //   const filter =
  //     todos.map(item => item) &&
  //     todos.filter(item => item.date.includes(currentDate));

  const filteredTodos = filteredTodoByStatus().filter(item => {
    const titleTime = (item.title + item.date).toLowerCase();
    return titleTime.includes(titleTime);
  });

  return (
    <View>
      <Text>{currentDate}</Text>
      <Pressable onPress={showDatePicker}>
        <Icon name={IcomoonIconsName.EVENT} />
      </Pressable>
      <FlatList
        data={filteredTodos}
        renderItem={({ item, index }) => <TackItem item={item} index={index} />}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
