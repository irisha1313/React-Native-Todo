import { CreateTask } from '@/screens/CreateTask';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import { HeaderButton } from '@/components';
import { AllTasks } from '@/screens/AllTasks';
import { IcomoonIconsName } from '@/types/IconType';
import { EScreens } from '@/types/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              {/* <Stack.Screen name={EScreens.example} component={Example} /> 
              <Stack.Screen
                name={EScreens.HOME}
                component={Home}
                options={{
                  headerShown: false,
                }}
              />*/}
              <Stack.Screen
                name={EScreens.AllTASKS}
                component={AllTasks}
                options={{
                  header: props => (
                    <View
                      style={{
                        height: 90,
                        backgroundColor: '#4A3780',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <HeaderButton
                        propsStyle={{
                          top: 50,
                          width: 30,
                          height: 30,
                          paddingLeft: 5,
                        }}
                        onPress={() => {
                          props.navigation.navigate('Home');
                        }}
                        navigation={props.navigation}
                        name={IcomoonIconsName.CIRCLELEFT}
                        size={13}
                      />
                      <Text
                        style={{
                          top: 25,
                          color: '#fff',
                          fontWeight: '600',
                          fontSize: 16,
                        }}>
                        All tasks
                      </Text>
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name={EScreens.CREATETASK}
                component={CreateTask}
                options={{
                  header: props => (
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
                  ),
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
