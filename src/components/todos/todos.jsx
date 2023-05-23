import { useCallback } from 'react';
import { Illumination } from '../illumination/illumination';
import deleteTodo from '../../assets/delete.png';
import activeTodo from '../../assets/active.png';
import completeTodo from '../../assets/complete.png';
import './todos.css';

export const Todos = (props) => {
    const activeToComplete = (status, index, todoName) => {
        if (status === false) {
            props.setActive(props.active - 1);
            props.setDone(props.done + 1);
        }
        props.setFilter((todo) => (todo.slice(0, index).concat({ title: todoName, completed: true }).concat(todo.slice(index + 1))))

        return (
            props.setTodos((todo) => (todo.slice(0, index).concat({ title: todoName, completed: true }).concat(todo.slice(index + 1))))
        );
    }

    const deleteTodos = (status, index) => {
        if (status === false) {
            props.setActive(props.active - 1);
        } else {
            props.setDone(props.done - 1);
        }

        return (
            props.setTodos((todo) => (todo.slice(0, index).concat(todo.slice(index + 1))))
        )
    }

    const textIllumination = useCallback((string) => <Illumination filter={props.search} string={string} />, [props.search])

    return (
        <section className="todos">
            {(((props.activeBtn === 1) && (props.search === '')) ? props.todos :
                ((props.activeBtn === 1) && (props.search !== '')) ? props.filter :
                    ((props.activeBtn === 2) && (props.search !== '')) ? props.filter :
                        ((props.activeBtn === 3) && (props.search !== '')) ? props.filter : props.filter).map((e, i) => (
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