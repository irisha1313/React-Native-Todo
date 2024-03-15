import { Button } from '@/components';
import { useAppDispatch } from '@/hooks';
import { editTodo } from '@/store/slises/TodoSlice';
import { typedNavigation } from '@/types';
import React, { FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
interface IProps {
  navigation: typedNavigation;
  route: any;
}
export const EditTask: FC<IProps> = ({ navigation, route }) => {
  const { id, todo } = route.params;
  const [editTitle, setEditTitle] = React.useState(todo.title);
  const [editCompleated, setEditCompleated] = React.useState(todo.compleated);
  const dispatch = useAppDispatch();
  const edit = () => {
    dispatch(
      editTodo({
        id: id,
        title: editTitle,
        completed: todo.completed,
      }),
    );
  };

  return (
    <View>
      <Text>{id}</Text>
      <TextInput
        style={styles.input}
        placeholder={editTitle}
        placeholderTextColor="#000"
        onChangeText={title => setEditTitle(title)}
      />
      <Text>{todo.title}</Text>
      <Button
        title="Save"
        onPress={() => {
          navigation.goBack(), edit();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
