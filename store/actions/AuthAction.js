import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../config/Firebase";
export const signup = ( data, setLoading) => async (dispatch) => {
   
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
        const user = userCredential.user
        dispatch({
            type: 'SIGNUP',
            payload: user
        });
		console.log('control in sign up action');
        setLoading(false)
    } catch (error) {
        alert("error", error);
    } finally {
        setLoading(false)
    }
}
export const login = ( data, setLoading) => async (dispatch) => {
   try {
    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
    const user = userCredential.user
    dispatch({
        type: 'LOGIN',
        payload: user
    });
    console.log('control in log in action');
    setLoading(false)
   } catch (error) {
    alert(JSON.stringify(error));
    console.log(error);
   }finally{
    setLoading(false)
   }
}