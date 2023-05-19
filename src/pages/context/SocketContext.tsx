import { ReactNode, createContext } from "react";
import { useSocket } from "../hooks/useSockets";
import { Socket } from "socket.io-client";
interface ISocketProvider {
    children: ReactNode;
}

export interface ISocketContext {
    socket?: Socket;
    online?: boolean;
}
const SocketContext = createContext<ISocketContext | null>(null);


const SocketProvider = ({ children }: ISocketProvider) => {
    const { socket, online } = useSocket("http://localhost:8080");
    return(
        <SocketContext.Provider value={{socket, online}}>
            {children}
        </SocketContext.Provider>
    )
}

export {
    SocketContext,
    SocketProvider
}
