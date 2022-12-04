import axios from 'axios';
import { todoAPI } from '../../helpers/consts';
import { setTodos } from '../slices/todoSlice';

export const getTodos = () => async (dispatch) => {
	const { data } = await axios.get(`${todoAPI}/?${window.location.search}`);
	dispatch(setTodos(data));
};

export const addTodo = (newTodo) => async (dispatch) => {
	await axios.post(todoAPI, newTodo);
	dispatch(getTodos());
};

export const deleteTodo = (id) => async (dispatch) => {
	console.log(id);
	await axios.delete(`${todoAPI}/${id}`);
	dispatch(getTodos());
};

export const editTodo =
	({ id, done }) =>
	async (dispatch) => {
		await axios.patch(`${todoAPI}/${id}`, { done: !done });
		dispatch(getTodos());
	};
