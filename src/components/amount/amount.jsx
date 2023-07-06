import './amount.scss';

export const Amount = ({ active, done }) => {

    return (
        <section className="amount">
            <div className="activeTodos">Ещё {active} {(active === 0) ? 'дел' : (active === 1) ? 'дело' : 'дел'}, которые нужно сделать, </div>
            <div className="doneTodos">{done} выполнено</div>
        </section>
    );
}