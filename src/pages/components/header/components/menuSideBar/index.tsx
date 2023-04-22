"use client"

import {useState} from 'react'
import styles from './styles.module.scss';
import clsx from 'clsx';
interface IMenuSideBar{
    close: boolean;
    btnmenu: (value: boolean) => void;
}

export default function MenuSideBar({close, btnmenu}: IMenuSideBar) {

    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    btnmenu(!close);
  };
    return (
        <div className={styles.menuSideBar}>
            <button
                className={`${styles.boton} ${isActive ? styles.active : ""}`}
                onClick={handleClick}
            >
                <span className={clsx(styles.topLine)}></span>
                <span className={clsx(styles.middle)}></span>
                <span className={clsx(styles.bottom)}></span>
            </button>
        </div>
    )
};
