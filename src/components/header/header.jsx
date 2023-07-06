import { Amount } from '../amount/amount';
import './header.scss';

export const Header = ({ active, done }) => {

    return (
        <section className="header">
            <div className="header">Список дел</div>
            <Amount active={active} done={done} />
        </section>
    );
}