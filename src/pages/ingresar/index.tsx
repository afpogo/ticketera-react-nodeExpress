import { useState, useEffect } from 'react';
import Login from '../components/Login';
import styles from './syles.module.scss'
import { getUsuarioStorage } from '@/pages/helpers/getUsuarioStorage';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

function Ingresar() {
    const [usuario] = useState(getUsuarioStorage);
    const {agente, password, escritorio} = usuario;
    const router = useRouter();

    useEffect(() => {
        if(password === 'llk11') router.replace('/escritorio')
        else router.replace('/ingresar')
    }, [agente, escritorio, password, router]);

    return (
        <div className={styles.ingresar}>
            <Login />
        </div>
     );
}

export default Ingresar;