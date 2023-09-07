import { useState } from 'react';
import './add-todo.scss';

export const AddTodo = ({ setTodos, active, setActive, setFilter }) => {
    const [addTodo, setAddTodo] = useState('');

    const pushTodo = (TodoName) => {
        setAddTodo('');
        setActive(active + 1);
        setFilter((todos) => todos.concat({ title: TodoName, completed: false }));
        setTodos((todos) => todos.concat({ title: TodoName, completed: false }))
    }

    const enterToPush = (event) => {
        if (event.code === 'Enter' && addTodo !== '') pushTodo(addTodo)
    }

    return (
        <section className="add-todo">
            <input
                type="text"
                value={addTodo}
                onChange={(e) => (setAddTodo(e.target.value))}
                onKeyDown={(e) => { enterToPush(e) }}
                placeholder='Что нужно сделать?' />
            <button
                className={(addTodo !== '') ? 'active' : ''}
                onClick={() => (pushTodo(addTodo))}
                type='button'
                disabled={(addTodo === '') ? true : false}>Добавить задачу</button>
        </section>
    );
}