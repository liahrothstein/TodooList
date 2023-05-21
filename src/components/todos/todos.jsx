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

    return (
        <section className="todos">
            {((props.activeBtn === 1) ? props.todos : (props.activeBtn === 2) ? props.filter : props.filter).map((e, i) => (
                <div className="todo" key={i}>
                    <div className="todoName">{e.title}</div>
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