import { useContext, useState } from "react";
import useHideMenu from "../hooks/useHideMenu";
import { ISocketContext, SocketContext } from "../context/SocketContext";

import styles from "./styles.module.scss";
export interface ITicket {
  id: string;
  number: number;
  escritorio: string | null;
  agente: string | null;
}

export default function CrearTicket() {
  useHideMenu(true);
  const { socket } = useContext(SocketContext) as ISocketContext;
  socket?.connect();

  const [ticket, setTicket] = useState<ITicket | null>(null);

  // Rutina de Creacion de nuevo ticket con socketIO
  const newTicket = () => {
    socket?.emit(
      "CreateNewTicket",
      { autenticacion: "Creacion de ticket... En curso..." },
      // ESTE CALLABACK SE CREA PERO LA EJECUCION DEPENDE COMPLETAMENTE DEL BACKEND
      (ticket: ITicket) => {
        setTicket(ticket);
      }
    );
  };

  return (
    <section className={styles.newticketContainer}>
      <div className={styles.createCont}>
        <h1 className={styles.title}>Presione el Boton para crear ticket</h1>
        <button
          type="button"
          className={styles.btnSubmit}
          onClick={newTicket}
         >
          CT
        </button>
      </div>
      {
        ticket && (
          <div className={styles.numberInfo}>
            <p>su numero</p>
            <p>{ticket?.number}</p>
          </div>
        )
      }
    </section>
  );
}
