import { useState } from 'react';
import './filter.css'

export const Filter = (props) => {
    const [search, setSearch] = useState('');

    const filterAll = (todos) => {
        props.setActiveBtn(1);

        return todos
    }
    const filterActive = (todos) => {
        props.setActiveBtn(2);

        return (
            props.setFilter(todos.filter((todo) => (todo.status === 'active')))
        )
    }
    const filterDone = (todos) => {
        props.setActiveBtn(3);

        return (
            props.setFilter(todos.filter((todo) => (todo.status === 'complete')))
        )
    }

    return (
        <section className="filter">
            <input
                type="text"
                placeholder='Введите сюда для поиска'
                value={search}
                onChange={(e) => (setSearch(e.target.value))} />
            <div className="buttons">
                <button
                    type='button'
                    onClick={() => (filterAll(props.todos))}
                    className={(props.activeBtn === 1) ? 'active' : ''}>Все</button>
                <button
                    type='button'
                    onClick={() => (filterActive(props.todos))}
                    className={(props.activeBtn === 2) ? 'active' : ''}>Активные</button>
                <button
                    type='button'
                    onClick={() => (filterDone(props.todos))}
                    className={(props.activeBtn === 3) ? 'active' : ''}>Выполненные</button>
            </div>
        </section>
    );
}