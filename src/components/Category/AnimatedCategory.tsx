import Colors from '@/constants/Colors';
import { useAppDispatch } from '@/hooks/useDispatch';
import { useAppSelector } from '@/hooks/useSelector';
import { statusFilter } from '@/store/slises/TodoSlice';
import { FC, useEffect } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
interface IProps {}

export const AnimatedCategory: FC<IProps> = ({}) => {
  const status = useAppSelector(state => state.status);
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  const SWITCH_CONTAINER_WIDTH = width * 1;
  const SWITCH_WIDTH = (width * 1) / 3;
  const translateX = useSharedValue(0);

  const animationStyleTranslateX = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  useEffect(() => {
    if (status === 0) {
      translateX.value = withSpring(SWITCH_WIDTH * 0);
    } else if (status === 1) {
      translateX.value = withSpring(SWITCH_WIDTH * 1);
    } else if (status === 2) {
      translateX.value = withSpring(SWITCH_WIDTH * 2);
    }
  }, [SWITCH_WIDTH, status, translateX]);

  return (
    <View style={[styles.container, { width: SWITCH_CONTAINER_WIDTH }]}>
      <View style={[styles.slideContainer, { width: SWITCH_CONTAINER_WIDTH }]}>
        <Animated.View
          style={[
            styles.slide,
            { width: SWITCH_WIDTH },
            animationStyleTranslateX,
          ]}
        />
      </View>
      <Pressable
        style={[styles.button, { width: SWITCH_WIDTH }]}
        onPress={() => dispatch(statusFilter(0))}>
        <Text>All</Text>
      </Pressable>
      <Pressable
        style={[styles.button, { width: SWITCH_WIDTH }]}
        onPress={() => dispatch(statusFilter(1))}>
        <Text>Compleated</Text>
      </Pressable>
      <Pressable
        style={[styles.button, { width: SWITCH_WIDTH }]}
        onPress={() => dispatch(statusFilter(2))}>
        <Text>Active</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 30,
  },
  button: {
    padding: 20,
    alignContent: 'center',
    alignItems: 'center',
  },

  slideContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.background,
    justifyContent: 'center',
  },
  slide: {
    backgroundColor: Colors.gray,
    paddingVertical: 20,
    borderRadius: 40,
  },
});
