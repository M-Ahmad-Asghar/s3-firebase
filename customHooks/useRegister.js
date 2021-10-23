import { useState } from "react";
import {  useDispatch } from 'react-redux'
import { signup, } from "../store/actions/AuthAction";

function useRegister() {

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

            } else {
                alert('Please fill all fields')
            }
            dispatch(signup(data, setLoading))
        } else { alert('Passowrd is not same!') }
    }
    return [firstName, setfirstName, lastName, setLastName, email, setEmail,
        password, setPassword, cPassword, setCPassword, ctaHandler, showPassword, setShowPassword]
}

export default useRegister
