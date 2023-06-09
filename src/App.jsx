import { useState } from 'react';
import './App.css';
import { AddTodo } from './components/add-todo/add-todo';
import { Filter } from './components/filter/filter';
import { Header } from './components/header/header';
import { Todos } from './components/todos/todos';

export default function App({ data }) {

  const [secondData, setSecondData] = useState(data);
  const [filteredData, setFilteredData] = useState(secondData);

  const [activeTodos, setActiveTodos] = useState(data.filter((amount) => (amount.completed === false)).length);
  const [doneTodos, setDoneTodos] = useState(data.filter((amount) => (amount.completed === true)).length);

  const [activeButton, setActiveButton] = useState(1);

  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Header
        active={activeTodos}
        setActive={setActiveTodos}
        done={doneTodos}
        setDone={setDoneTodos} />
      <Filter
        todos={secondData}
        setTodos={setSecondData}
        filter={filteredData}
        setFilter={setFilteredData}
        activeBtn={activeButton}
        setActiveBtn={setActiveButton}
        search={search}
        setSearch={setSearch} />
      <Todos
        todos={secondData}
        setTodos={setSecondData}
        activeBtn={activeButton}
        filter={filteredData}
        setFilter={setFilteredData}
        active={activeTodos}
        setActive={setActiveTodos}
        done={doneTodos}
        setDone={setDoneTodos}
        search={search}
        setSearch={setSearch} />
      <AddTodo
        todos={secondData}
        setTodos={setSecondData}
        active={activeTodos}
        setActive={setActiveTodos}
        filter={filteredData}
        setFilter={setFilteredData} />
    </div>
  );
}