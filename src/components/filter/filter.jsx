import { useEffect } from 'react';
import './filter.scss'

export const Filter = (props) => {

    const filterAll = (todos) => {
        props.setActiveBtn(1);
        props.setFilter(todos);

        return todos;
    }
    const filterActive = (todos) => {
        props.setActiveBtn(2);

        return (
            props.setFilter(todos.filter((todo) => (todo.completed === false)))
        )
    }
    const filterDone = (todos) => {
        props.setActiveBtn(3);

        return (
            props.setFilter(todos.filter((todo) => (todo.completed === true)))
        )
    }

    const filterSearch = (searchText, array, filteredArray) => {
        if (!searchText && props.activeBtn === 3) return filteredArray.filter((todo) => (todo.completed === true));
        if (!searchText && props.activeBtn === 2) return filteredArray.filter((todo) => (todo.completed === false));

        return (
            array?.filter(({ title }) => (title.toLowerCase().includes(searchText.toLowerCase())))
        )
    }

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredBooks = filterSearch(props.search, props.filter, props.todos);

            props.setFilter(filteredBooks);
        }, 300)

        return () => (clearTimeout(debounce))
    }, [props.search, props.filter]);

    return (
        <section className="filter">
            <input
                type="text"
                placeholder='Введите сюда для поиска'
                value={props.search}
                onChange={(e) => (props.setSearch(e.target.value))} />
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