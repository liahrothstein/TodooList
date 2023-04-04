import { Amount } from '../amount/amount';
import './header.css';

export const Header = (props) => {

    return (
        <section className="header">
            <div className="header">Список дел</div>
            <Amount active={props.active} setActive={props.setActive} done={props.done} setDone={props.setDone} />
        </section>
    );
}