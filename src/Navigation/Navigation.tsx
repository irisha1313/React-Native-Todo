import { AllTasksHeader } from '@/components/Header/AllTasksHeader';
import { CreateTaskHeader } from '@/components/Header/CreateTaskHeader';
import { AllTasks, CreateTask, DatePicker, Home } from '@/screens';
import { EditTask } from '@/screens/EditTask';
import { EScreens } from '@/types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={EScreens.HOME}
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={EScreens.AllTASKS}
            component={AllTasks}
            options={{
              header: props => <AllTasksHeader props={props} />,
            }}
          />
          <Stack.Screen
            name={EScreens.CREATETASK}
            component={CreateTask}
            options={{
              header: props => <CreateTaskHeader props={props} />,
            }}
          />
          <Stack.Screen name={EScreens.DatePicker} component={DatePicker} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          {/* <Stack.Screen name="Modal" component={Modal} /> */}
          <Stack.Screen name={EScreens.EDITTASKModal} component={EditTask} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
