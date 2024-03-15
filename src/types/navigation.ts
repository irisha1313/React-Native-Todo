import { NavigationProp } from '@react-navigation/native';
import { ITodo } from './todoType';

export enum EScreens {
  HOME = 'Home',
  AllTASKS = 'AllTasks',
  CREATETASK = 'CreateTask',
  DatePicker = 'DatePicker',
  EDITTASKModal = 'EditTaskModal',
  // MODAL = 'Modal',
}

export type TypeRootStackParamList = {
  Home: undefined;
  CreateTask: undefined;
  AllTasks: undefined;
  DatePicker: undefined;
  EditTaskModal: { id: string; todo: ITodo };
  // Modal: undefined;
};

export type typedNavigation = NavigationProp<TypeRootStackParamList>;
