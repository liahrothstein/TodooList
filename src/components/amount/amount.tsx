import './amount.scss';

interface AmountProps {
    active: number,
    done: number
}

export const Amount = ({ active, done }: AmountProps) => {

    return (
        <section className="amount">
            <div className="activeTodos">Ещё {active} {(active === 0) ? 'дел' : (active === 1) ? 'дело' : 'дел'}, которые нужно сделать, </div>
            <div className="doneTodos">{done} выполнено</div>
        </section>
    );
}