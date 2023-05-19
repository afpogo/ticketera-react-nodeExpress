import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ISocketContext, SocketContext } from "../context/SocketContext";

import clsx from "clsx";
import styles from "./styles.module.scss";
import { IUsuarioStorageResponse, getUsuarioStorage } from "@/pages/helpers/getUsuarioStorage";
import { ITicket } from "../crearTicket";

function Escritorio() {
  const [user, setUser] = useState<IUsuarioStorageResponse>({ agente: '', password: '', escritorio: ''});

  useEffect(() => {
    setUser(getUsuarioStorage());
  }, []);

  const { agente, escritorio } = user as IUsuarioStorageResponse;
  const [ ticket, setTicket ] = useState<ITicket | null>(null);
  // Conexion al socket
  const { socket } = useContext(SocketContext) as ISocketContext;
  socket?.connect();
  const router = useRouter();
  const outBtn = () => {
    localStorage.clear()
    router.push("/ingresar");
  };
  const nextTicketBtn = () => {
    socket?.emit(
      "ticketAssign",
      { agente, escritorio },
      (ticket: ITicket) => {
        setTicket(ticket);
      }
    )
  };
  return (
    <section className={styles.escritorio_container}>
      <div className={styles.escritorio__head}>
        <h1 className={styles.title}>{agente}</h1>
        <button
          type="button"
          className={clsx(styles.btnScreen)}
          onClick={outBtn}
        >
          {"Salir"}
        </button>
      </div>
      <div className={styles.gridCont}>
        <div className={styles.escritorio}>
          <p>
            Trabajando en el <strong>escritorio:</strong>
          </p>
          <span>{escritorio}</span>
        </div>
        <div className={styles.ticket}>
          <p>
            Atendiendo el <strong>Ticket:</strong>
          </p>
          <span>{ticket ? ticket.number : '0' }</span>
        </div>
      </div>
      <div className={styles.footer}>
        <button
          type="button"
          className={styles.btnScreen}
          onClick={nextTicketBtn}
        >
          Siguiente Ticket
        </button>
      </div>
    </section>
  );
}

export default Escritorio;
