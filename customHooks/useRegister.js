import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from "../store/Actions/action";
import { signup } from "../store/actions/AuthAction";
function useRegister() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    // getting current date

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    let spaceChk = userName.includes(' ')
    let data ={
        userName:userName,
        email:email,
        password:password,
        time:dateTime,
    }
    
    function ctaHandler() {
        {userName !='' && email!='' && password !='' && cPassword != '' ? dispatch(addUser(data, setLoading)): alert('Please fill all fields');
         dispatch(signup(data, setLoading))}
    }
    const user = useSelector(state => state.authReducer.user)
    console.log('user', user);
    return [data,dispatch, addUser, setLoading, userName, setUserName, email, setEmail,
         password, setPassword, cPassword, setCPassword, ctaHandler ]
}

export default useRegister
