'use client'

// Se aclara que la Password no debe ir en el local Storage por temas de seguridad, en este ejemplo la usamos solamente para fines didacticos
export interface IUsuarioStorageResponse {
    agente: string;
    password: string;
    escritorio: string;
}

export const getUsuarioStorage = (): IUsuarioStorageResponse => {
    return {
        agente: localStorage.getItem('username') as string,
        password: localStorage.getItem('password') as string,
        escritorio: (localStorage.getItem('chair') as string)|| '0'
    }
}
