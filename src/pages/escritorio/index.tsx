import clsx from "clsx";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
function Escritorio() {
  const router = useRouter();
  const outBtn = () => {
    localStorage.clear()
    router.push("/ingresar");
  };
  const nextTicketBtn = () => {};
  return (
    <section className={styles.escritorio_container}>
      <div className={styles.escritorio__head}>
        <h1 className={styles.title}>Julio</h1>
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
          <span>5</span>
        </div>
        <div className={styles.ticket}>
          <p>
            Atendiendo el <strong>Ticket:</strong>
          </p>
          <span>55</span>
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
