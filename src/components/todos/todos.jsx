import { useCallback } from 'react';
import { Illumination } from '../illumination/illumination';
import deleteTodo from '../../assets/delete.png';
import activeTodo from '../../assets/active.png';
import completeTodo from '../../assets/complete.png';
import './todos.scss';

export const Todos = ({ todos, setTodos, activeBtn, filter, setFilter, active, setActive, done, setDone, search }) => {
    const activeToComplete = (status, index, todoName) => {
        if (status === false) {
            setActive(active - 1);
            setDone(done + 1);
        }
        setFilter((todo) => (todo.slice(0, index).concat({ title: todoName, completed: true }).concat(todo.slice(index + 1))))
        setTodos((todo) => (todo.slice(0, index).concat({ title: todoName, completed: true }).concat(todo.slice(index + 1))))
    };

    const deleteTodos = (status, index) => {
        if (status === false) {
            setActive(active - 1);
        } else {
            setDone(done - 1);
        }
        setTodos((todo) => (todo.slice(0, index).concat(todo.slice(index + 1))))
    };

    const textIllumination = useCallback((string) => <Illumination filter={search} string={string} />, [search]);

    const todosArray = (actvBtn, srch, tds, fltr) => {
        return (((actvBtn === 1) && (srch === '')) ? tds :
            ((actvBtn === 1) && (srch !== '')) ? fltr :
                ((actvBtn === 2) && (srch !== '')) ? fltr :
                    ((actvBtn === 3) && (srch !== '')) ? fltr : fltr)
    }

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