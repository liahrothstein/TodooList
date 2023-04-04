import './amount.css';

export const Amount = (props) => {

    return (
        <section className="amount">
            <div className="activeTodos">Ещё {props.active} {(props.active === 0) ? 'дел' : (props.active === 1) ? 'дело' : 'дел(-а)'}, которые нужно сделать, </div>
            <div className="doneTodos">{props.done} выполнено</div>
        </section>
    );
}