import { NavigationProp } from '@react-navigation/native';

export enum EScreens {
  HOME = 'Home',
  AllTASKS = 'AllTasks',
  CREATETASK = 'CreateTask',
  DatePicker = 'DatePicker',
}

export type TypeRootStackParamList = {
  Home: undefined;
  CreateTask: undefined;
  AllTasks: undefined;
  DatePicker: undefined;
};

export type typedNavigation = NavigationProp<TypeRootStackParamList>;
