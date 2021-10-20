import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { login } from "../store/actions/AuthAction";

const useLogin = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let data ={
        email:email,
        password:password,
    }
    
    console.log('data', data );
     const ctaHandler = () => {
        dispatch(login(data, setLoading))
    }
    
    // function ctaHandler() {
    //     {email!='' && password !='' ?  :alert('please fill all fields')}
    // }
    const user = useSelector(state => state.authReducer.user)
    console.log('user', user);
    return [ctaHandler, email, setEmail, password, setPassword]
}

export default useLogin
