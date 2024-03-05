import { ITodo } from '@/types/todoType';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface TodoState {
  todos: ITodo[];
  status: number;
}

// Define the initial state using that type
const initialState: TodoState = {
  status: 0,
  todos: [],
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
