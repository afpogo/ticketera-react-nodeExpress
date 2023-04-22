import {ReactNode} from 'react';
import styles from './styles.module.scss';

interface IHeaderProps{
    children: ReactNode
}

// edf
export default function Header({ children }: IHeaderProps) {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <i>Icono</i>
          <img src="" alt="" />
        </div>
        {children}
      </div>
    )
};
