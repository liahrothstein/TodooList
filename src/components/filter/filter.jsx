import { useState } from 'react';
import './filter.css'

export const Filter = () => {
    const [search, setSearch] = useState('');
    const [activeButton, setActiveButton] = useState(1);

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
                    onClick={() => (setActiveButton(1))}
                    className={(activeButton === 1) ? 'active' : ''}>Все</button>
                <button
                    type='button'
                    onClick={() => (setActiveButton(2))}
                    className={(activeButton === 2) ? 'active' : ''}>Активные</button>
                <button
                    type='button'
                    onClick={() => (setActiveButton(3))}
                    className={(activeButton === 3) ? 'active' : ''}>Выполненные</button>
            </div>
        </section>
    );
}