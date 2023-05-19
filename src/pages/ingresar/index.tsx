import { useState } from 'react';
import Login from '../components/Login';
import styles from './syles.module.scss'
import { getUsuarioStorage } from '@/helpers/getUsuarioStorage';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

function Ingresar() {
    const [usuario] = useState(getUsuarioStorage);
    const {agente, escritorio} = usuario;
    const router = useRouter();
    if(agente && escritorio) router.push('/escritorio')
    else router.push('/ingresar')
    return (
        <div className={styles.ingresar}>
            <Login />
        </div>
     );
}

export default Ingresar;