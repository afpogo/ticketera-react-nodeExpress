import { useEffect } from 'react';
import { IUIContext, useUI } from "../context/UiContext";

export default function useHideMenu(hide:boolean) {
    const { showMenu, hideMenu } = useUI() as IUIContext;
    useEffect(() => {
        if(hide) hideMenu()
        else showMenu()
    }, [hide, showMenu, hideMenu]);
};
