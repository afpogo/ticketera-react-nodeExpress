import useHideMenu from "../hooks/useHideMenu";
import Historial from "./components/historial";
import Turnos from "./components/turnos";
import styles from "./styles.module.scss";
function Cola() {
  useHideMenu(true);
  const data = [
    {
      ticketNo: 33,
      escritorio: 3,
      agente: "Fernando Herrera",
    },
    {
      ticketNo: 34,
      escritorio: 4,
      agente: "Melissa Flores",
    },
    {
      ticketNo: 35,
      escritorio: 5,
      agente: "Carlos Castro",
    },
    {
      ticketNo: 36,
      escritorio: 3,
      agente: "Fernando Herrera",
    },
    {
      ticketNo: 37,
      escritorio: 3,
      agente: "Fernando Herrera",
    },
    {
      ticketNo: 38,
      escritorio: 2,
      agente: "Melissa Flores",
    },
    {
      ticketNo: 39,
      escritorio: 5,
      agente: "Carlos Castro",
    },
  ];
  return (
    <section className={styles.colaCont}>
      <div className={styles.title}>
        <h1>Atendiendo Al cliente</h1>
      </div>
      <div className={styles.turneroCont}>
        <div className={styles.lista_turnos}>
          <ul>
            {data
              .filter((item) => item.ticketNo % 2 === 0)
              .map((ticket) => {
                return (
                  <li key={ticket.ticketNo}>
                    <Turnos
                      ticket={ticket.ticketNo}
                      agente={ticket.agente}
                      escritorio={ticket.escritorio}
                     />
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.lista_historial}>
          <h3>Historial</h3>
          <ul>
            {data
              .filter((item) => item.ticketNo % 3 === 0)
              .map((ticket) => {
                return (
                  <li key={ticket.ticketNo}>
                    <Historial
                      ticket={ticket.ticketNo}
                      agente={ticket.agente}
                      escritorio={ticket.escritorio}
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
