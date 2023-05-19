import styles from './styles.module.scss';
interface ITurnosProps {
    ticket: number;
    escritorio: number;
    agente: string;
}
export default function Turnos({ticket, escritorio, agente}:ITurnosProps) {
    return(
        <div className={styles.turnoCont}>
            <p className={styles.ticketNum}>{ticket}</p>
            <div className={styles.ticketInfo}>
                <p>{agente}</p>
                <p>{'Escritorio: '}<strong>{escritorio}</strong></p>
            </div>
        </div>
    )
};
