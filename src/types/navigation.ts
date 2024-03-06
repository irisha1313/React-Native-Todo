import { NavigationProp } from '@react-navigation/native';

export enum EScreens {
  HOME = 'Home',
  AllTASKS = 'AllTasks',
  CREATETASK = 'CreateTask',
}

export type TypeRootStackParamList = {
  Home: undefined;
  CreateTask: undefined;
  AllTasks: undefined;
};

export type typedNavigation = NavigationProp<TypeRootStackParamList>;
