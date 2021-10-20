import styles from '../../styles/Header.module.css'
import Link from 'next/link'
const Header = () => {
    return (
        <div className={styles.topnav}>
            <Link href='home'><a  >Home</a></Link>
            <Link href='register'><a >Register</a></Link>
            <Link href='login'><a >Login</a></Link>
            
        </div>
    )
}

export default Header
