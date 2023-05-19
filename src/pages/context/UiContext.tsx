import { ReactNode, createContext, useContext, useState } from "react";

interface IUIProviderProps {
    children: ReactNode;
}

export interface IUIContext {
    ocultarMenu: boolean;
    showMenu: ()=> void;
    hideMenu: ()=> void;
}

const UiContext = createContext<IUIContext | null>(null);

function UiProvider({children}: IUIProviderProps) {

    const [ocultarMenu, setOcultarMenu] = useState(false);
    const showMenu = ()=>{
        setOcultarMenu(true);
    }
    const hideMenu = ()=>{
        setOcultarMenu(false);
    }

    return (
        <UiContext.Provider value={{
            ocultarMenu,
            showMenu,
            hideMenu
        }}>
            {children}
        </UiContext.Provider>
    )
};

function useUI() {
    const ui = useContext(UiContext);
    return ui;
}

export {
    UiProvider,
    useUI
}