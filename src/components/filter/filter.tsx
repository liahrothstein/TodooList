import { useEffect } from 'react';

import { Todo } from '../../types/todo';
import { FilterButtons } from '../../types/filterButtons';

import './filter.scss'

interface FilterProps {
    todos: Todo[],
    filter: Todo[],
    setFilter: (filter: Todo[]) => void,
    activeBtn: FilterButtons,
    setActiveBtn: (activeBtn: FilterButtons) => void,
    search: string,
    setSearch: (search: string) => void
}

export const Filter = ({ todos, filter, setFilter, activeBtn, setActiveBtn, search, setSearch }: FilterProps) => {

    const filterAll = (todos: Todo[]): void => {
        setActiveBtn(FilterButtons.All);
        setFilter(todos);
    }
    const filterActive = (todos: Todo[]): void => {
        setActiveBtn(FilterButtons.Active);
        setFilter(todos.filter((todo) => (todo.completed === false)))
    }
    const filterDone = (todos: Todo[]): void => {
        setActiveBtn(FilterButtons.Completed);
        setFilter(todos.filter((todo) => (todo.completed === true)))
    }

    const filterSearch = (searchText: string, array: Todo[], filteredArray: Todo[]): Todo[] => {
        if (!searchText && activeBtn === 3) return filteredArray.filter((todo) => (todo.completed === true));
        if (!searchText && activeBtn === 2) return filteredArray.filter((todo) => (todo.completed === false));

        return (
            array?.filter(({ title }) => (title.toLowerCase().includes(searchText.toLowerCase())))
        )
    }

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredTodos = filterSearch(search, filter, todos);

            setFilter(filteredTodos);
        }, 1000)

        return () => (clearTimeout(debounce))
    }, [search, filter]);

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
                    onClick={() => (filterAll(todos))}
                    className={(activeBtn === 1) ? 'active' : ''}>Все</button>
                <button
                    type='button'
                    onClick={() => (filterActive(todos))}
                    className={(activeBtn === 2) ? 'active' : ''}>Активные</button>
                <button
                    type='button'
                    onClick={() => (filterDone(todos))}
                    className={(activeBtn === 3) ? 'active' : ''}>Выполненные</button>
            </div>
        </section>
    );
}