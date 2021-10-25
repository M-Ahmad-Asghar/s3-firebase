import styles from '../styles/Login.module.css'
import Link from 'next/link'
import useLogin from '../customHooks/useLogin'
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
    const [ ctaHandler, email, setEmail, password, setPassword, success] = useLogin()
    return (
        <div className={styles.file}>
        <div className={styles.body}>
        <div id={styles.loginBox}>
            <div className={styles.left}>
                <h1 className={styles.headings}>Login</h1>

                <input type="text" name="email" placeholder="E-mail" className={styles.inputs}
                value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" name="password" placeholder="Password" className={styles.inputs}
                 value={password} onChange={(e) => setPassword(e.target.value)}
                />

                <div className={styles.btnLink}>
                <button className={styles.inputs} type="submit" name="login" onClick={ctaHandler}>
                {success? <Spinner animation="border" className={styles.spinner} role="status" />:'Log in'}

                </button>
                <p className={styles.login}> or <Link href='/register'>Sign up</Link></p>
                </div>
            </div>

        </div>
        </div>
    </div>
    )
}
export default Login
