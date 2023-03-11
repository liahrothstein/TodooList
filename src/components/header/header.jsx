import { Amount } from '../amount/amount';
import './header.css';

export const Header = () => {

    return (
        <section className="header">
            <div className="header">Список дел</div>
            <Amount />
        </section>
    );
}