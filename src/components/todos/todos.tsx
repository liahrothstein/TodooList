import { useCallback } from 'react';
import { Illumination } from '../illumination/illumination';
import deleteTodo from '../../assets/delete.png';
import activeTodo from '../../assets/active.png';
import completeTodo from '../../assets/complete.png';

import { Todo } from '../../types/todo';
import { FilterButtons } from '../../types/filterButtons';

import './todos.scss';

interface TodosProps {
    todos: Todo[],
    setTodos: (todos: Todo[]) => void,
    activeBtn: FilterButtons,
    filter: Todo[],
    setFilter: (filter: Todo[]) => void,
    active: number,
    setActive: (active: number) => void,
    done: number,
    setDone: (done: number) => void,
    search: string,
}

export const Todos = ({ todos, setTodos, activeBtn, filter, setFilter, active, setActive, done, setDone, search }: TodosProps) => {
    const activeToComplete = (status: boolean, index: number, todoName: string): void => {
        if (status === false) {
            setActive(active - 1);
            setDone(done + 1);
        }

        const filteredTodos = (todo: Todo[]): Todo[] => (todo.slice(0, index).concat({ title: todoName, completed: true }).concat(todo.slice(index + 1)));
        const Todos = (todo: Todo[]): Todo[] => (todo.slice(0, index).concat({ title: todoName, completed: true }).concat(todo.slice(index + 1)));

        setFilter(filteredTodos(todos));
        setTodos(Todos(todos));
    };

    const deleteTodos = (status: boolean, index: number): void => {
        if (status === false) {
            setActive(active - 1);
        } else {
            setDone(done - 1);
        }

        const Todos = (todo: Todo[]): Todo[] => (todo.slice(0, index).concat(todo.slice(index + 1)));

        setTodos(Todos(todos));
    };

    const textIllumination = useCallback((string: string) => <Illumination filter={search} string={string} />, [search]);

    const todosArray = (actvBtn: FilterButtons, srch: string, tds: Todo[], fltr: Todo[]): Todo[] => {
        return (((actvBtn === 1) && (srch === '')) ? tds :
            ((actvBtn === 1) && (srch !== '')) ? fltr :
                ((actvBtn === 2) && (srch !== '')) ? fltr :
                    ((actvBtn === 3) && (srch !== '')) ? fltr : fltr)
    };

    return (
        <section className="todos">
            {todosArray(activeBtn, search, todos, filter).map((e, i) => (
                <div className="todo" key={i}>
                    <div className="todoName">{textIllumination(e.title)}</div>
                    <div className="buttons">
                        <button
                            type='button'
                            onClick={() => (activeToComplete(e.completed, i, e.title))}>
                            <img src={(e.completed === false) ? activeTodo : completeTodo} alt="" />
                        </button>
                        <button
                            className='delete'
                            type='button'
                            onClick={() => (deleteTodos(e.completed, i))}>
                            <img src={deleteTodo} alt="" />
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
}