import { useEffect } from 'react';
import './filter.scss'

export const Filter = ({ todos, filter, setFilter, activeBtn, setActiveBtn, search, setSearch }) => {

    const filterAll = (todos) => {
        setActiveBtn(1);
        setFilter(todos);

        return todos;
    }
    const filterActive = (todos) => {
        setActiveBtn(2);

        return (
            setFilter(todos.filter((todo) => (todo.completed === false)))
        )
    }
    const filterDone = (todos) => {
        setActiveBtn(3);

        return (
            setFilter(todos.filter((todo) => (todo.completed === true)))
        )
    }

    const filterSearch = (searchText, array, filteredArray) => {
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