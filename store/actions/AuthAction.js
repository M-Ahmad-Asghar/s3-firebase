import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/Firebase";
import { collection, getDocs, doc, getDoc, addDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { toast, } from "react-toastify";

export const signup = (data, setLoading, setSuccess, setPending) => async (dispatch) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
        const user = userCredential.user
        await setDoc(doc(db, "users", user.uid), data);
        user && setPending(true)
        await auth.signOut()
        dispatch({
            type: 'SIGNUP',
            payload: null
        });
        
        setLoading(false)
         toast.success('Successfully Signed up!', {
            position: "top-center",
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
        

    } catch (error) {
        if (error.code === ('auth/invalid-email')) {
            toast.error('Please enter a valid Email!', {
                position: "top-center",
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        } else if (error.code === ('auth/weak-password')) {
            toast.error('Password length should be more than 6 characters', {
                position: "top-center",
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        } else {
            toast.error(error.code, {
                position: "top-center",
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }
    } finally {
        setLoading(false)
        setSuccess(false)
    }
}
export const login = (data, setLoading, setSuccess) => async (dispatch) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
        const user = userCredential.user
        user && localStorage.setItem('token', true);
        dispatch({
            type: 'LOGIN',
            payload: user
        });
        setLoading(false)
        user &&    toast.success('Successfully Signed in!', {
            position: "top-center",
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    } catch (error) {
        if (error.code === ('auth/invalid-email')) {
            toast.error('Please enter a valid email', {
                position: "top-center",
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        } else if (error.code === ('auth/wrong-password')) {
            toast.error('Incorrect Password!', {
                position: "top-center",
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        } else if (error.code === ('auth/user-not-found')) {
            toast.error('User not found', {
                position: "top-center",
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        } else {
            toast.error(error.code, {
                position: "top-center",
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }

    } finally {
        setLoading(false)
        setSuccess(false)
    }
}
export const logout = () => async (dispatch) => {
    try {
        const user = auth.signOut()
        // window.location.reload
        dispatch({
            type: 'LOGOUT',
            // payload: user
        });
        toast.warning('You have logged out', {
            position: "top-center",
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
        
    } catch (error) {
        toast.error(error.code, {
            position: "top-center",
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
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
    } finally {
        setPending(false)
    }
}