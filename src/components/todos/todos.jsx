import deleteTodo from '../../assets/delete.png';
import activeTodo from '../../assets/active.png';
import completeTodo from '../../assets/complete.png';
import './todos.css';

export const Todos = (props) => {
    const activeToComplete = (status, index, todoName) => {
        if (status === 'active') {
            props.setActive(props.active - 1);
            props.setDone(props.done + 1);
        }
        props.setFilter((todo) => (todo.slice(0, index).concat({ name: todoName, status: 'complete' }).concat(todo.slice(index + 1))))

        return (
            props.setTodos((todo) => (todo.slice(0, index).concat({ name: todoName, status: 'complete' }).concat(todo.slice(index + 1))))
        );
    }

    return (
        <section className="todos">
            {((props.activeBtn === 1) ? props.todos : (props.activeBtn === 2) ? props.filter : props.filter).map((e, i) => (
                <div className="todo" key={i}>
                    <div className="todoName">{e.name}</div>
                    <div className="buttons">
                        <button
                            type='button'
                            onClick={() => (activeToComplete(e.status, i, e.name))}>
                            <img src={(e.status === 'active') ? activeTodo : completeTodo} alt="" />
                        </button>
                        <button
                            className='delete'
                            type='button'
                            onClick={() => (props.setTodos((todo) => (todo.slice(0, i).concat(todo.slice(i + 1)))))}>
                            <img src={deleteTodo} alt="" />
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
}