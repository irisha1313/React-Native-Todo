import Colors from '@/constants/Colors';
import { useAppDispatch } from '@/hooks/useDispatch';
import { useAppSelector } from '@/hooks/useSelector';
import { toggleCompleated } from '@/store/slises/TodoSlice';
import { ITodo, IcomoonIconsName } from '@/types';
import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { ConfirmButton } from '../Buttons/ConfirmButton';
import { Category } from '../Category/Category';
import Icon from '../Icon/Icon';
interface IProps {
  item: ITodo;
  index: number;
}

export const TackItem: FC<IProps> = ({ item, index }) => {
  const todosLength = useAppSelector(state => state.todo.todos.length) - 1;
  const compleatedTask = item.completed === true;
  const dispatch = useAppDispatch();

  const renderRightActions = () => {
    return (
      <View
        style={{
          flex: 1,
          right: '190%',
          justifyContent: 'center',
        }}>
        <ConfirmButton item={item} />
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View>
        <View style={[styles.container]}>
          <View style={styles.outter}>
            <Category
              categoryName={item.category}
              compleatedTask={compleatedTask}
            />
            <View>
              <Text
                style={[
                  compleatedTask ? styles.textCompleated : styles.text,
                  { fontWeight: '600', fontSize: 16 },
                ]}>
                {item?.title}
              </Text>
              <Text
                style={[compleatedTask ? styles.textCompleated : styles.time]}>
                {item?.date}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            {/* <ConfirmButton item={item} /> */}

            <Pressable onPress={() => dispatch(toggleCompleated(item.id))}>
              {item?.completed ? (
                <Icon name={IcomoonIconsName.CHECKBOXCHECKED} />
              ) : (
                <Icon name={IcomoonIconsName.CHECKBOXUNCHECKED} />
              )}
            </Pressable>
          </View>
        </View>

        <View style={todosLength === index ? null : styles.divider} />
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    width: '100%',
    padding: 25,
  },
  divider: {
    borderColor: Colors.gray,
    opacity: 0.7,
    borderWidth: 1,
    marginBottom: 5,
  },
  outter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 6,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
  textCompleated: {
    textDecorationLine: 'line-through',
    opacity: 0.2,
  },
  time: {
    fontWeight: '500',
    fontSize: 14,
  },
  iconContainer: {
    ...StyleSheet.absoluteFillObject,
    left: 311,
    top: 28,
  },
});
