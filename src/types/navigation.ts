import { NavigationProp } from '@react-navigation/native';

export enum EScreens {
  HOME = 'Home',
  AllTASKS = 'AllTasks',
  CREATETASK = 'CreateTask',
  example = 'Example',
}

export type TypeRootStackParamList = {
  Home: undefined;
  CreateTask: undefined;
  AllTasks: undefined;
  Example: undefined;
};

export type typedNavigation = NavigationProp<TypeRootStackParamList>;
