import './App.css';
import { AddTodo } from './components/add-todo/add-todo';
import { Filter } from './components/filter/filter';
import { Header } from './components/header/header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <AddTodo />
    </div>
  );
}