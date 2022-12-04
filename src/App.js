import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CreateTodo from './components/CreateTodo';
import OneTodo from './components/OneTodo';
import { useActions } from './hooks/useActions';

function App() {
	const { todos } = useSelector((store) => store.todo);
	const { getTodos } = useActions();

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className='py-10 bg-zinc-900 h-screen'>
			<div className='text-white w-4/5 mx-auto'>
				<h1 className='text-2xl font-bold text-center mb-10'>Todo list</h1>
				<CreateTodo />
				{todos.map((todo) => (
					<OneTodo key={todo.id} todo={todo} />
				))}
			</div>
		</div>
	);
}

export default App;
