import styles from '@/styles/styles.module.scss';
import Link from 'next/link';
interface ILayout {
    children: React.ReactNode;
}
export default function Layout({children}: ILayout) {
    return (
    <section className={styles.dashboard}>
      <div className={styles.header}></div>
      <div className={styles.logo}>
        <i>Icono</i>
        <img src="" alt="" />
      </div>
      <div className={styles.degrade}></div>
      <div className={styles.sidebar}>
        {/* botones */}
        <Link href={"/ingresar"}>
          <div className={styles.scopeBar}>
            <div className="span">Ingresar</div>
          </div>
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.scopeMain}>{children}</div>
      </div>
    </section>
    )
};
