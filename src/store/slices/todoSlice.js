import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [],
};

const todoSlice = createSlice({
	name: 'todoSlice',
	initialState,
	reducers: {
		addTodo(state, action) {
			state.todos.push(action.payload);
		},
		deleteTodo(state, action) {
			state.todos = state.todos.filter((item) => item.id !== action.payload);
		},
		editTodo(state, action) {
			state.todos = state.todos.map((item) =>
				item.id === action.payload.id
					? { ...item, done: action.payload.check }
					: item
			);
		},
		setTodos(state, action) {
			state.todos = action.payload;
		},
	},
});

export const todoReducer = todoSlice.reducer;

export const { addTodo, deleteTodo, editTodo, setTodos } = todoSlice.actions;
