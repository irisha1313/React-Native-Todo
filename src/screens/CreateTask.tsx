import { Button, CategoryList } from '@/components';
import Icon from '@/components/Icon/Icon';
import { useAppDispatch } from '@/hooks';
import { addTodo } from '@/store/slises/TodoSlice';
import { IcomoonIconsName, typedNavigation } from '@/types';
import DateTimePicker from '@react-native-community/datetimepicker';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment';
import React, { FC, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface IProps {
  navigation: typedNavigation;
}
export const CreateTask: FC<IProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState(null);
  const [dateTime, setDateTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const onChange = (e, selectedDate) => {
    setDateTime(selectedDate);
  };

  const currentDate = moment(dateTime).format('l, h:mm a'); //
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View>
          <Text style={styles.categoryName}>Task Title </Text>
          <TextInput
            style={styles.input}
            placeholder="Task Title"
            onChangeText={title => setTitle(title)}
          />
        </View>
        <View
          style={{
            marginVertical: 24,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={styles.categoryName}>Category </Text>
          <CategoryList category={category} setCategory={setCategory} />
        </View>

        <View style={[styles.dateContainer]}>
          <View style={styles.dateBox}>
            <Text style={styles.categoryName}>Date </Text>
            <Pressable style={styles.dateInner} onPress={() => setShow(true)}>
              {show ? (
                <DateTimePicker
                  mode="date"
                  value={dateTime}
                  collapsable
                  onChange={onChange}
                />
              ) : (
                <Text
                  style={{
                    width: 120,
                    paddingLeft: 20,
                  }}>
                  Date
                </Text>
              )}
              <Icon name={IcomoonIconsName.EVENT} size={17} />
            </Pressable>
          </View>
          <View style={styles.dateBox}>
            <Text style={styles.categoryName}>Time </Text>

            <Pressable style={styles.dateInner} onPress={() => setShow(true)}>
              {show ? (
                <DateTimePicker
                  mode="time"
                  value={dateTime}
                  collapsable
                  onChange={onChange}
                />
              ) : (
                <Text
                  style={{
                    width: 120,
                    paddingLeft: 20,
                  }}>
                  Time
                </Text>
              )}

              <Icon name={IcomoonIconsName.CLOCK} size={17} />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }} />
      <Button
        onPress={() => {
          if (title === '') {
            alert('Title cannot be empty');
            return;
          } else if (category === null) {
            alert('Select category ');
            return;
          }
          dispatch(
            addTodo({
              id: nanoid(),
              title,
              completed: false,
              category,
              date: currentDate,
            }),
          ),
            navigation.navigate('Home');
        }}
        title={'Save'}
        insets={insets}
        alignSelfStyle={'center'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    paddingRight: 10,
    color: '#000',
  },
  inner: {
    padding: 25,
  },
  input: {
    paddingVertical: 20,
    marginTop: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.ligthGray,
    borderRadius: 6,
  },
  notesInput: {
    marginTop: 10,
    paddingBottom: 130,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.ligthGray,
    borderRadius: 6,
    paddingTop: 10,
  },
  viewInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    maxWidth: 160,
    paddingVertical: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.ligthGray,
    borderRadius: 6,
  },
  dateContainer: {
    marginBottom: 25,
    flexDirection: 'row',
    width: '100%',
    gap: 5,
  },
  dateInner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 5,
    maxWidth: 160,
    height: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.ligthGray,
    borderRadius: 6,
  },
  dateBox: { width: 170 },
});
