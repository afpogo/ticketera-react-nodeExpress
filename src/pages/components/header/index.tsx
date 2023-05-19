import {ReactNode} from 'react';
import styles from './styles.module.scss';
import { IUIContext, useUI } from '@/pages/context/UiContext';
import clsx from 'clsx';

interface IHeaderProps{
    children: ReactNode
}

// edf
export default function Header({ children }: IHeaderProps) {
  const { ocultarMenu } = useUI() as IUIContext;
    return (
      <div className={clsx(styles.header, {[styles.header__hideMenu]: !ocultarMenu})}>
        <div className={styles.logo}>
          <i>Icono</i>
          <img src="" alt="" />
        </div>
        {children}
      </div>
    )
};
