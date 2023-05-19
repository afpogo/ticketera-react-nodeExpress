import styles from '@/styles/styles.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import MenuSideBar from './header/components/menuSideBar';
import ScopeBarBtns from './sidebar/components/scopeBarBtns';
import { IUIContext, useUI } from '../context/UiContext';
interface ILayout {
  children: React.ReactNode;
}
export default function Layout({ children }: ILayout) {
  const { ocultarMenu } = useUI() as IUIContext;
  // const [onof, setOnof] = useState(false);
  return (
    <section className={clsx(styles.dashboard, { [styles.dashboard__off]: !ocultarMenu })}>
      {/* Header */}
      <Header>
        <MenuSideBar />
      </Header>
      {/* Sidebar */}
      <Sidebar>
        <ScopeBarBtns />
      </Sidebar>
      {/* Content */}
      <div className={styles.content}>
        <div
          className={styles.scopeMain}
        >
          {children}
        </div>
      </div>
    </section>
  )
};
