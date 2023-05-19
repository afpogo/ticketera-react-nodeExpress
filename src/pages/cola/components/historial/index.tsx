import styles from './styles.module.scss';
interface IHistorialProps {
    ticket: number;
    escritorio: number;
    agente: string;
}
export default function Historial({ticket, escritorio, agente}:IHistorialProps) {
    return(
        <div className={styles.historialCont}>
        <p>{`Ticket No: `} <strong>{ticket}</strong></p>
        <div className={styles.ticketInfo}>
            <p>{`Atendido Por: ${agente}`}</p>
            <p>{`En el escritorio: ${escritorio}`}</p>
        </div>
        </div>
    )
};
