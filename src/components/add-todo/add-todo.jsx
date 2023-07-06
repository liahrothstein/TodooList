import { useState } from 'react';
import './add-todo.scss';

export const AddTodo = ({ setTodos, active, setActive, setFilter }) => {
    const [addTodo, setAddTodo] = useState('');

    const activeButton = {
        backgroundColor: '#17a2b8',
        borderColor: '#17a2b8',
        color: 'white'
    };

    const pushTodo = (TodoName) => {
        setAddTodo('');
        setActive(active + 1);
        setFilter((todos) => todos.concat({ title: TodoName, completed: false }));

        return (
            setTodos((todos) => todos.concat({ title: TodoName, completed: false }))
        );
    }

    return (
        <section className="add-todo">
            <input
                type="text"
                value={addTodo}
                onChange={(e) => (setAddTodo(e.target.value))}
                onKeyDown={(e) => { if (e.code === 'Enter' && addTodo !== '') pushTodo(addTodo) }}
                placeholder='Что нужно сделать?' />
            <button
                style={(addTodo !== '') ? activeButton : {}}
                onClick={() => (pushTodo(addTodo))}
                type='button'
                disabled={(addTodo === '') ? true : false}>Добавить задачу</button>
        </section>
    );
}