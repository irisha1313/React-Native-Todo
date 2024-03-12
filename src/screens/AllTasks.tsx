import { AnimatedCategory, TackItem } from '@/components';
import Icon from '@/components/Icon/Icon';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useAppSelector, useDebounce } from '@/hooks';
import { IcomoonIconsName } from '@/types';
import moment from 'moment';
import React, { FC, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
  navigation: any;
}

export const AllTasks: FC<IProps> = ({ navigation }) => {
  const todoStatus = useAppSelector(state => state.status);
  const { todos } = useAppSelector(state => state);
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

  const [searchValue, setSearchValue] = useState('');
  const searchValueDebounced = useDebounce(searchValue, 500);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setDate(date);
    hideDatePicker();
  };
  const currentDate = moment(date).format('l'); //

  const filteredTodos = filteredTodoByStatus()
    .filter(item => {
      const titleTime = (item.title + item.date).toLowerCase();
      // if (item.date.includes(currentDate)) {
      // consol000e.log(item, 'item');
      // return item;
      // } else {
      return titleTime.includes(searchValueDebounced.toLowerCase());
      // }
    })
    .filter(item => item.date.includes(currentDate));

  return (
    <SafeAreaView style={[styles.container]}>
      <AnimatedCategory />
      <View style={[defaultStyles.line]} />
      <View
        style={[
          styles.searchContainer,
          {
            width: '100%',
            marginBottom: 20,
            marginRight: 50,
            paddingHorizontal: 30,
          },
        ]}>
        <TextInput
          placeholder="Search task"
          style={styles.search}
          onChangeText={title => setSearchValue(title)}
        />
        <View style={styles.info}>
          <Text>Tasks: {todos.length}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text>{currentDate}</Text>
            <Pressable onPress={showDatePicker}>
              <Icon name={IcomoonIconsName.EVENT} />
            </Pressable>
          </View>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {filteredTodos.length === 0 ? (
        <Text style={{ color: 'red', fontSize: 18 }}>
          Sorry,i can't find the assignment you asked for.{' '}
        </Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredTodos}
          renderItem={({ item, index }) => (
            <TackItem item={item} index={index} />
          )}
          style={[styles.flatListContainer]}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: -50,
    backgroundColor: Colors.background,
  },
  flatListContainer: {
    width: 360,
    borderRadius: 20,
    maxHeight: 520,
  },
  search: {
    right: 40,
    paddingHorizontal: 100,
    paddingVertical: 20,
    backgroundColor: Colors.ligthBlue,
    borderRadius: 10,
    marginVertical: 20,
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 270,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    gap: 5,
  },
});
