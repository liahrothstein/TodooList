import { useState } from 'react';

import { Todo } from '../../types/todo';

import './add-todo.scss';

interface AddTodoProps {
    todos: Todo[],
    setTodos: (todos: Todo[]) => void,
    active: number,
    setActive: (active: number) => void,
    filter: Todo[],
    setFilter: (filter: Todo[]) => void
}

export const AddTodo = ({ todos, setTodos, active, setActive, filter, setFilter }: AddTodoProps) => {
    const [addTodo, setAddTodo] = useState('');

    const pushTodo = (TodoName: string): void => {
        const filteredTodos = (todos: Todo[]): Todo[] => todos.concat({ title: TodoName, completed: false });
        const Todos = (todos: Todo[]): Todo[] => todos.concat({ title: TodoName, completed: false });

        setAddTodo('');
        setActive(active + 1);
        setFilter(filteredTodos(filter));
        setTodos(Todos(todos))
    }

    const enterToPush = (event: React.KeyboardEvent<HTMLInputElement>) => {
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