import styles from '../styles/Register.module.css'
import Link from 'next/link'
import useRegister from '../customHooks/useRegister'
import Spinner from 'react-bootstrap/Spinner';

const Register = () => {
    const [firstName, setfirstName, lastName, setLastName, email, setEmail,
        password, setPassword, cPassword, setCPassword, ctaHandler, showPassword, setShowPassword, success] = useRegister()
    return (
        <div className={styles.file}>
            <div className={styles.body}>
            <div id={styles.loginBox}>
                <div className={styles.left}>
                    <h1 className={styles.headings}>Sign up</h1>
                        {console.log('success', success)}
                    <input type="text" name="1stName" placeholder="First Name" className={styles.inputs}
                     value={firstName}  onChange={(e) => setfirstName(e.target.value)}/>
                    <input type="text" name="lastName" placeholder="Last Name" className={styles.inputs}
                     value={lastName}  onChange={(e) => setLastName(e.target.value)}/>
                    <input type="text" name="email" placeholder="E-mail" className={styles.inputs}
                     value={email} onChange={(e) => setEmail(e.target.value)}/>
                           
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className={styles.inputs}
                     value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type={showPassword ? 'text' : 'password'} name="password2" placeholder="Confirm password" className={styles.inputs} 
                    value={cPassword} onChange={(e) => setCPassword(e.target.value)}/>
                        <input type="checkbox"  onChange={()=>setShowPassword(!showPassword)} /> Show Password
                    <div className={styles.btnLink}>
                    <button type="submit" name="signup_submit" 
                    className={styles.inputs} onClick={ctaHandler}
                    >
                     {true? <Spinner animation="border" className={styles.spinner} role="status" />:'Sign up'}
                    </button>
                    <p className={styles.login}>or <Link href='/login'>login</Link></p>
                    
                    </div>
                    
                </div>
               
            </div>
            </div>
        </div>
    )
}
export default Register
