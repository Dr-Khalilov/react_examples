import './App.css';
import TodoList from './components/TodoList';

const App = () => {
    const todos = [
        { id: 1, completed: false, title: 'Buy a bread' },
        { id: 2, completed: false, title: 'Buy a meat' },
        { id: 3, completed: false, title: 'Buy a milk' },
        { id: 4, completed: false, title: 'Buy a oil' },
    ];

    return <TodoList todos={todos} />;
};

export default App;
