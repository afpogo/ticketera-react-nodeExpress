import { useContext, useState, useEffect } from 'react';
import { ISocketContext, SocketContext } from "../context/SocketContext";
import useHideMenu from "../hooks/useHideMenu";
// import { useSocket } from "../hooks/useSockets";
import Historial from "./components/historial";
import Turnos from "./components/turnos";
import styles from "./styles.module.scss";
import { ITicket } from '../crearTicket';
import { getUltimos } from '../helpers/getUltimos';
function Cola() {

  useHideMenu(true);
  const { socket } = useContext(SocketContext) as ISocketContext;
  const [tickets, setTickets] = useState<ITicket[]>([]);

  // Conectamos el socket con el servidor
  socket?.connect();

  // Realizamos la llamada de los ultimos tickets para que se carguen con la pagina
  useEffect(() => {
    getUltimos()
    .then(setTickets);
  }, [])

  // Escuchamos los eventos ticket
  useEffect(() => {
    socket?.on('update-queue_ticket-asignado', (tickets) => {
      setTickets(tickets);
    })
    return () => {
      socket?.off('update-queue_ticket-asignado');
    }
  }, [socket]);

  return (
    <section className={styles.colaCont}>
      <div className={styles.title}>
        <h1>Atendiendo Al cliente</h1>
      </div>
      <div className={styles.turneroCont}>
        <div className={styles.lista_turnos}>
          <ul>
            {tickets
              .slice(0, 3)
              .map((ticket: ITicket) => {
                return (
                  <li key={ticket.number}>
                    <Turnos
                      ticket={ticket.number}
                      agente={ticket.agente!}
                      escritorio={ticket.escritorio! as unknown as number}
                     />
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.lista_historial}>
          <h3>Historial</h3>
          <ul>
            {tickets
              .slice(3, 10)
              .map((ticket: ITicket) => {
                return (
                  <li key={ticket.number}>
                    <Historial
                      ticket={ticket.number}
                      agente={ticket.agente!}
                      escritorio={ticket.escritorio! as unknown as number}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cola;
