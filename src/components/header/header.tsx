import { Amount } from '../amount/amount';

import './header.scss';

interface HeaderProps {
    active: number,
    done: number
}

export const Header = ({ active, done }: HeaderProps) => {

    return (
        <section className="header">
            <div className="header">Список дел</div>
            <Amount active={active} done={done} />
        </section>
    );
}