import { useState } from 'react';
import './App.css';
import { AddTodo } from './components/add-todo/add-todo';
import { Filter } from './components/filter/filter';
import { Header } from './components/header/header';
import { Todos } from './components/todos/todos';

export default function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  const [activeTodos, setActiveTodos] = useState(0);
  const [doneTodos, setDoneTodos] = useState(0);

  const [activeButton, setActiveButton] = useState(1);

  return (
    <div className="App">
      <Header
        active={activeTodos}
        setActive={setActiveTodos}
        done={doneTodos}
        setDone={setDoneTodos} />
      <Filter
        todos={data}
        setTodos={setData}
        filter={filteredData}
        setFilter={setFilteredData}
        activeBtn={activeButton}
        setActiveBtn={setActiveButton} />
      <Todos
        todos={data}
        setTodos={setData}
        activeBtn={activeButton}
        filter={filteredData}
        setFilter={setFilteredData}
        active={activeTodos}
        setActive={setActiveTodos}
        done={doneTodos}
        setDone={setDoneTodos} />
      <AddTodo
        todos={data}
        setTodos={setData}
        active={activeTodos}
        setActive={setActiveTodos}
        filter={filteredData}
        setFilter={setFilteredData} />
    </div>
  );
}