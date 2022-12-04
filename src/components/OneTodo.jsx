import React from 'react';
import { useActions } from '../hooks/useActions';

const OneTodo = ({ todo }) => {
	const { deleteTodo, editTodo } = useActions();

	function handleDelete(id) {
		deleteTodo(id);
	}

	function handleChange(item) {
		editTodo(item);
	}
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
			<div></div>
			<div className='flex items-center cursor-pointer '>
				<input
					type='checkbox'
					className='mr-2'
					checked={todo.done}
					onChange={() => handleChange(todo)}
				/>
				<span
					onClick={() => handleChange(todo)}
					className={todo.done ? 'line-through' : ''}
				>
					{todo.title}
				</span>
			</div>
			<button
				className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
				onClick={() => handleDelete(todo.id)}
			>
				delete
			</button>
		</div>
	);
};

export default OneTodo;
