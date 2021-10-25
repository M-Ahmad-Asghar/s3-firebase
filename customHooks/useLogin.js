import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { login } from "../store/actions/AuthAction";
import { useRouter } from "next/router";
import { authStateChk } from "../store/actions/AuthAction";
import { toast } from "react-toastify";

const useLogin = () => {
  const Router = useRouter();
  const [success, setSuccess] = useState(false)
  const [pending, setPending] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
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
  let data = {
    email: email,
    password: password,
  }
  const ctaHandler = () => {
    if(email !== '' && password !== ''){
      {dispatch(login(data, setLaoding, setSuccess)), setSuccess(true)}
    }else{
      toast.error('All fields are required', {
        position: "top-center",
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }

  }
  return [ctaHandler, email, setEmail, password, setPassword, success, showPassword, setShowPassword]
}

export default useLogin
