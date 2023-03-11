import { useState } from 'react';
import './add-todo.css';

export const AddTodo = () => {
    const [addTodo, setAddTodo] = useState('');

    const activeButton = {
        backgroundColor: '#17a2b8',
        borderColor: '#17a2b8',
        color: 'white'
    };

    return (
        <section className="add-todo">
            <input
                type="text"
                value={addTodo}
                onChange={(e) => (setAddTodo(e.target.value))}
                placeholder='Что нужно сделать?' />
            <button
                style={(addTodo !== '') ? activeButton : {}}
                type='button'
                disabled={(addTodo === '') ? true : false}>Добавить задачу</button>
        </section>
    );
}