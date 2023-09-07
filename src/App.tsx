import { useState } from 'react';
import { AddTodo } from './components/add-todo/add-todo';
import { Filter } from './components/filter/filter';
import { Header } from './components/header/header';
import { Todos } from './components/todos/todos';

import { Todo } from './types/todo';
import { FilterButtons } from './types/filterButtons';

import './App.scss';

interface AppProps {
  data: Todo[]
}

export default function App({ data }: AppProps) {

  const [secondData, setSecondData] = useState<Todo[]>(data);
  const [filteredData, setFilteredData] = useState<Todo[]>(secondData);

  const [activeTodos, setActiveTodos] = useState<number>(data.filter((amount) => (amount.completed === false)).length);
  const [doneTodos, setDoneTodos] = useState<number>(data.filter((amount) => (amount.completed === true)).length);

  const [activeButton, setActiveButton] = useState<FilterButtons>(FilterButtons.All);

  const [search, setSearch] = useState<string>('');

  return (
    <div className="App">
      <Header
        active={activeTodos}
        done={doneTodos} />
      <Filter
        todos={secondData}
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
        search={search} />
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