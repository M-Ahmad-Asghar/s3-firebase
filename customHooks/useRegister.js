import { useState, useEffect } from "react";
import {  useDispatch, useSelector } from 'react-redux'
import { signup, } from "../store/actions/AuthAction";
import { useRouter } from "next/router";
import { authStateChk } from "../store/actions/AuthAction";
import { toast } from "react-toastify";

function useRegister() {
    const Router = useRouter();
    const [success, setSuccess] = useState(false)
    const [pending, setPending] = useState(false)
    const user = useSelector(state => state.authReducer.userSet)
    useEffect(async () => {
      if (pending) {
        Router.push("login");
      }
      
    }, [pending]);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    // getting current date

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    let spaceChk = firstName.includes(' ')

    let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        time: dateTime,
    }
    function ctaHandler() {
        if (password === cPassword) {

            if (firstName != '' && email != '' && password != '' && cPassword != '') {
                {dispatch(signup(data, setLoading, setSuccess, setPending)), setSuccess(true)}
            } else {
                toast.error('All fields are required!', {
                    position: "top-center",
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                });
            }
            
        } else { 
            toast.error('Passwords do not match', {
                position: "top-center",
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
    }

    }
    return [firstName, setfirstName, lastName, setLastName, email, setEmail,
        password, setPassword, cPassword, setCPassword, ctaHandler, showPassword, setShowPassword, success]
}

export default useRegister
