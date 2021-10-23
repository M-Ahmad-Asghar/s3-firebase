import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, authStateChk } from '../../store/actions/AuthAction'
import { useRouter } from "next/router";


const Header = () => {
    const dispatch = useDispatch();
    const [pending, setPending] = useState(true)
    const Router = useRouter()
    const authState = useSelector(state => state.authReducer.user)
    useEffect(() => {
        dispatch(authStateChk(setPending))
    }, [])

    return (
        <div className={styles.topnav} >
            <Link href='home' className={styles.links}><a  >Multiple Images Uploader</a></Link>
            <span className={styles.logoutIcon}>
                 <Image src='/assets/logout.png' height={20} width={20}
                    onClick={() => {dispatch(logout()), Router.replace('login')}} /> 
                    
            </span>
            <Link href='home'>Sign up</Link>
        </div>
    )
}

export default Header
