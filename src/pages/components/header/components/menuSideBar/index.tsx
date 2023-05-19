"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import useHideMenu from "@/pages/hooks/useHideMenu";
interface IMenuSideBar {
  close: boolean;
  btnmenu: (value: boolean) => void;
}

export default function MenuSideBar() {
  const [isActive, setIsActive] = useState(false);
  useHideMenu(isActive);

  const handleClick = () => {
    setIsActive(!isActive);
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
  );
}
