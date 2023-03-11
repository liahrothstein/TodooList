import { useState } from 'react';
import './amount.css';

export const Amount = () => {
    const [activeTodos, setActiveTodos] = useState(0);
    const [doneTodos, setDoneTodos] = useState(0);

    return (
        <section className="amount">
            <div className="activeTodos">Ещё {activeTodos} {(activeTodos === 0) ? 'дел' : (activeTodos === 1) ? 'дело' : 'дел(-а)'}, которые нужно сделать, </div>
            <div className="doneTodos">{doneTodos} выполнено</div>
        </section>
    );
}