import { Category, ITodo } from '@/types/todoType';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface TodoState {
  todos: ITodo[];
  status: number;
}

const initialState: TodoState = {
  status: 0,
  todos: [
    {
      id: '124',
      title: 'Go to the concert ',
      category: Category.EVENT,
      date: '03/16/2024',
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      const newTack = {
        id: action.payload.id,
        title: action.payload.title,
        date: action.payload.date,
        category: action.payload.category,
        completed: action.payload.completed,
      };
      state.todos.push(newTack);
    },

    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      state.todos = state.todos.filter(item => item.id !== action.payload.id);
    },
    deleteAllTodos(state) {
      state.todos = [];
    },
    toggleCompleated(state, action: PayloadAction<string>) {
      const toggle = state.todos.find(item => item.id === action.payload);
      if (toggle) {
        toggle.completed = !toggle.completed;
      }
    },
    statusFilter(state, action: PayloadAction<number>) {
      state.status = action.payload;
    },
    searchTodo(state, action: PayloadAction<{ title: string }>) {
      state.todos.filter(item => item.title.includes(action.payload.title));
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleCompleated,
  statusFilter,
  deleteAllTodos,
  searchTodo,
} = todoSlice.actions;

export default todoSlice.reducer;

export const todos = (store: RootState) => store.todos;
export const selectTodoListByDate = (date: string) =>
  createSelector([todos], todos => todos.filter(e => e.date === date));
