import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = (serverPath: string) => {
  // La conexion con el socket
  const socket = useMemo(
    () =>
      io(serverPath, {
        transports: ["websocket"],
        autoConnect: false // Le digo cuando conectarse con socket.connect()
      }),
    [serverPath]
  );

  const [online, setOnline] = useState(false);

  // Vericador de conexion
  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  // Evento que se dispara cuando se conecta al socket server
  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  // Evento que se dispara cuando se desconecta del socket server
  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
  };
};
