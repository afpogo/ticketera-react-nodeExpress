import { ReactNode } from "react";
import styles from './styles.module.scss';
import { IUIContext, useUI } from "@/pages/context/UiContext";
import clsx from "clsx";

interface ISidebarProps {
    children: ReactNode
}
// edf
export default function Sidebar({children}: ISidebarProps) {
    const { ocultarMenu } = useUI() as IUIContext;
    return (
        <div className={clsx(styles.sidebar, {[styles.sidebar__hideMenu]: !ocultarMenu})}>
        {children}
      </div>
    )
};

