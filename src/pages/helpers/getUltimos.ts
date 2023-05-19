interface IUltimos { // Esta interface cumple la misma funcion que la interface ITickets
    id:         string;
    number:     number;
    escritorio: string;
    agente:     string;
}

interface IDataUltimos {
    ok: boolean,
    data: IUltimos[]
}

export const getUltimos = async(): Promise<IUltimos[]>  => {
    const resp = await fetch('http://localhost:8080/ultimos');
    const data: IDataUltimos = await resp.json();

    return data.data;
}