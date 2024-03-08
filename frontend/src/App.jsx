import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CreateTodo } from './components/CreatedTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const json = await response.json();
        setTodos(json.todos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
