import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { login } from "../store/actions/AuthAction";
import { useRouter } from "next/router";
import { authStateChk } from "../store/actions/AuthAction";

const useLogin = () => {
    const Router = useRouter();
    const [pending, setPending] = useState(true)
    const user = useSelector(state => state.authReducer.user)
    useEffect(async () => {
      dispatch(authStateChk(setPending))
      if (user) {
        Router.push("home");
      }
    }, [user]);
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
