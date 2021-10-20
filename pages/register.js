import styles from '../styles/Register.module.css'
import Link from 'next/link'
import useRegister from '../customHooks/useRegister'
const Register = () => {
    const [data,dispatch, addUser, setLoading, userName, setUserName, email, setEmail,
        password, setPassword, cPassword, setCPassword, ctaHandler] = useRegister()
    return (
        <div className={styles.file}>
            <div className={styles.body}>
            <div id={styles.loginBox}>
                <div className={styles.left}>
                    <h1 className={styles.headings}>Sign up</h1>

                    <input type="text" name="username" placeholder="Username" className={styles.inputs}
                     value={userName}  onChange={(e) => setUserName(e.target.value)}/>
                    
                    <input type="text" name="email" placeholder="E-mail" className={styles.inputs}
                     value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <input type="password" name="password" placeholder="Password" className={styles.inputs}
                     value={password} onChange={(e) => setPassword(e.target.value)}/>
                    
                    <input type="password" name="password2" placeholder="Retype password" className={styles.inputs} 
                    value={cPassword} onChange={(e) => setCPassword(e.target.value)}/>

                    <div className={styles.btnLink}>
                    <input type="submit" name="signup_submit" value="Sign me up" className={styles.inputs} onClick={ctaHandler}
                    />
                    <p className={styles.login}>or <Link href='/login'>Login</Link></p>
                    </div>
                </div>

                <div className={styles.right}>
                    <span className={styles.loginwith}>Sign in with<br />social network</span>

                    <button className={`${styles.socialSignin} ${styles.facebook}`}>Log in with facebook</button>
                    <button className={`${styles.socialSignin} ${styles.twitter}`}>Log in with Twitter</button>
                    <button className={`${styles.socialSignin} ${styles.google}`}>Log in with Google+</button>
                </div>
                <div className={styles.or}>OR</div>
            </div>
            </div>
        </div>
    )
}
export default Register
