import { useState } from 'react';
import './App.css';
import { AddTodo } from './components/add-todo/add-todo';
import { Filter } from './components/filter/filter';
import { Header } from './components/header/header';
import { Todos } from './components/todos/todos';

export default function App(props) {

  const [secondData, setSecondData] = useState(props.data);
  const [filteredData, setFilteredData] = useState(secondData);

  const [activeTodos, setActiveTodos] = useState(props.data.filter((amount) => (amount.completed === false)).length);
  const [doneTodos, setDoneTodos] = useState(props.data.filter((amount) => (amount.completed === true)).length);

  const [activeButton, setActiveButton] = useState(1);

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
        setActiveBtn={setActiveButton} />
      <Todos
        todos={secondData}
        setTodos={setSecondData}
        activeBtn={activeButton}
        filter={filteredData}
        setFilter={setFilteredData}
        active={activeTodos}
        setActive={setActiveTodos}
        done={doneTodos}
        setDone={setDoneTodos} />
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