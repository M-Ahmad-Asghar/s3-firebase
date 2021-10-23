import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/Firebase";
import { collection, getDocs, doc, getDoc, addDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export const signup = (data, setLoading) => async (dispatch) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
        const user = userCredential.user
        await setDoc(doc(db, "users", user.uid), data);
        dispatch({
            type: 'SIGNUP',
            payload: user
        });
        setLoading(false)
    } catch (error) {
        console.log("error", error);
    } finally {
        setLoading(false)
    }
}
export const login = (data, setLoading) => async (dispatch) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
        const user = userCredential.user
        user && localStorage.setItem('token', true);
        dispatch({
            type: 'LOGIN',
            payload: user
        });
        setLoading(false)
    } catch (error) {
        alert(JSON.stringify(error));
        console.log(error);
    } finally {
        setLoading(false)
    }
}
export const logout = ( ) => async (dispatch) => {
    try {
        const user = auth.signOut()
        // window.location.reload
        dispatch({
            type: 'LOGOUT',
            // payload: user
        });
    } catch (error) {
        console.log(error);
    } 
}
export const authStateChk = (setPending) => async (dispatch) => {
    try {
        const user = auth.currentUser
      
        if (user) {
            const uid = user.uid;
            dispatch({
                type: "AUTH_STATE",
                payload: user
            })
            setPending(false)
        } else {
            setPending(false)
        }
       
        
        setPending(false)
    }
    catch (error) {
        console.log(JSON.stringify(error))
    }finally{
        setPending(false)
    }
}