import { useState } from 'react';
import './add-todo.scss';

export const AddTodo = (props) => {
    const [addTodo, setAddTodo] = useState('');

    const activeButton = {
        backgroundColor: '#17a2b8',
        borderColor: '#17a2b8',
        color: 'white'
    };

    const pushTodo = (TodoName) => {
        setAddTodo('');
        props.setActive(props.active + 1);
        props.setFilter((todos) => todos.concat({ title: TodoName, completed: false }));

        return (
            props.setTodos((todos) => todos.concat({ title: TodoName, completed: false }))
        );
    }

    return (
        <section className="add-todo">
            <input
                type="text"
                value={addTodo}
                onChange={(e) => (setAddTodo(e.target.value))}
                placeholder='Что нужно сделать?' />
            <button
                style={(addTodo !== '') ? activeButton : {}}
                onClick={() => (pushTodo(addTodo))}
                type='button'
                disabled={(addTodo === '') ? true : false}>Добавить задачу</button>
        </section>
    );
}