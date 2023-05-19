import clsx from "clsx";
import styles from "./styles.module.scss";
import useHideMenu from "../hooks/useHideMenu";
export default function CrearTicket() {
  useHideMenu(true);
  return (
    <section className={styles.newticketContainer}>
      <div className={styles.createCont}>
        <h1 className={styles.title}>Presione el Boton para crear ticket</h1>
        <button type="button" className={styles.btnSubmit}>
            CT
        </button>
      </div>
      <div className={styles.numberInfo}>
        <p>55</p>
        <p>su numero</p>
      </div>
    </section>
  );
}
