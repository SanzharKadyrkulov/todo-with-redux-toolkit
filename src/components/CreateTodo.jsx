import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

const CreateTodo = () => {
	const { addTodo } = useActions();
	const [value, setValue] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		if (!value.trim()) return;
		const newTodo = {
			id: Date.now(),
			done: false,
			title: value,
		};
		addTodo(newTodo);
		setValue('');
	}
	return (
		<form
			className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20'
			onSubmit={handleSubmit}
		>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type='text'
				placeholder='Add a task'
				className='bg-transparent w-full border-none outline-none'
			/>
		</form>
	);
};

export default CreateTodo;
