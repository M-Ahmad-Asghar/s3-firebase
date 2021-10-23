import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, authStateChk } from '../../store/actions/AuthAction'
import { useRouter } from "next/router";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            <div lg={6} href='home' className={styles.links}><a  >Multiple Images Uploader</a></div>
            <div lg={2} className={styles.logoutIcon}>
                {authState ? <Image src='/assets/logout.png' height={20} width={20}
                    onClick={() => {dispatch(logout()), Router.replace('login')}} /> 
                    :
                    <Link href='register' >Sign up</Link>}
            </div>
            
        </div>
    )
}

export default Header
