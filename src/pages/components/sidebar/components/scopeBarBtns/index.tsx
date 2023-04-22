import Link from "next/link";
import clsx from "clsx";
import styles from './styles.module.scss';

export default function ScopeBarBtns() {
  return (
    <div className={styles.scopeBar}>
      <Link href={"/ingresar"}>
        <div className={clsx(styles.btnMid, styles.btnSidebar)}>Ingresar</div>
      </Link>
    </div>
  )
};
