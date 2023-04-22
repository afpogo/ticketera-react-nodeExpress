import { ReactNode } from "react";
import styles from './styles.module.scss';

interface ISidebarProps {
    children: ReactNode
}
// edf
export default function Sidebar({children}: ISidebarProps) {
    return (
        <div className={styles.sidebar}>
        {children}
      </div>
    )
};

