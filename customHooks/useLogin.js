import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { login } from "../store/actions/AuthAction";
const useLogin = () => {
    const [laoding, setLaoding] = useState(true)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let data ={
        email:email,
        password:password,
    }
    
     const ctaHandler = () => {
       email !== '' && password !== '' ? dispatch(login(data, setLaoding)):alert('Please fill all fields')
    }
    return [ctaHandler, email, setEmail, password, setPassword]
}

export default useLogin
