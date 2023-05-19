import clsx from 'clsx';
import styles from './styles.module.scss'
import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter } from 'next/router';
import { log } from 'console';

export default function Login() {
    const router = useRouter();
    const [focus, setFocus] = useState({
        user: false,
        password: false,
        chair: false,
    });
    const [login, setLogin] = useState({
        user: '',
        password: '',
        chair: ''
    })

    const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'user' && e.target.value === '') {
            setFocus({
                ...focus,
                [e.target.name]: !focus.user
            })
        }
        if (e.target.name === 'password' && e.target.value === '') {
            setFocus({
                ...focus,
                [e.target.name]: !focus.password
            })
        }
        if (e.target.name === 'chair' && e.target.value === '') {
            setFocus({
                ...focus,
                [e.target.name]: !focus.chair
            })
        }
    }

    const handleFocusOut = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'user' && e.target.value === '') {
            setFocus({
                ...focus,
                [e.target.name]: !focus.user,
            })
        }
        if (e.target.name === 'password' && e.target.value === '') {
            setFocus({
                ...focus,
                [e.target.name]: !focus.password,
            })
        }
        if (e.target.name === 'chair' && e.target.value === '') {
            setFocus({
                ...focus,
                [e.target.name]: !focus.chair,
            })
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {user, password, chair} = login;
        // console.log(user);
        localStorage.setItem('username', user);
        localStorage.setItem('password', password);
        localStorage.setItem('chair', chair);
        router.push('/escritorio');
    }
    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit} className={styles.login__form} autoComplete='off'>
                <h1>Login</h1>
                <div className={clsx(styles.txtb, {[styles.focus]: focus.user})}>
                    <input
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleFocusOut}
                        type='text'
                        id='username'
                        name='user'
                        value={login.user}
                    />
                    <span data-placeholder='Username' />
                </div>
                <div className={clsx(styles.txtb, {[styles.focus]: focus.password})}>
                    <input
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleFocusOut}
                        type='password'
                        id='pass'
                        name='password'
                        value={login.password}
                    />
                    <span data-placeholder='Password' />
                </div>
                <div className={clsx(styles.txtb, {[styles.focus]: focus.chair})}>
                    <input
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleFocusOut}
                        type='number'
                        id='chair'
                        name='chair'
                        value={login.chair}
                    />
                    <span data-placeholder='Chair' />
                </div>
                {/* <div className={this.state.focusInitialInput}>
            <input
              onChange={this.handleChange}
              type="mail"
              id="mail"
              name="mail"
              value={this.state.mail}
            />
            <span data-placeholder="Mail"></span>
          </div> */}

                <input type='submit' value='Login' className={styles.logbtn} />
                <div className={styles.bottom_text}>
                    <span>dont have account </span>
                    <a href='#'>Sing up</a>
                </div>
            </form>
        </div>
    )
};
