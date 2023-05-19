interface IUsuarioStorageResponse {
    agente: string;
    escritorio: string;
}

export const getUsuarioStorage = (): IUsuarioStorageResponse => {
    return {
        agente: localStorage.getItem('username') as string,
        escritorio: localStorage.getItem('password') as string
    }
}