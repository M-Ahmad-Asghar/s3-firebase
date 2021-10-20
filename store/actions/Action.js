import { collection, getDocs, doc, getDoc, addDoc, setDoc, updateDoc } from "firebase/firestore";
import { db , storage} from "../../config/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const addUser = (data, setLoading) => async (dispatch) => {
    try {
        let res = await addDoc(collection(db, "users"), data);
        dispatch({
            type: 'ADD_USER',
            payload: res
        });
		console.log('control in action');
        setLoading(false)
    } catch (error) {
        console.log("error", error);
    } finally {
        setLoading(false)
    }
}

export const uploadData = (setLoading,  file, index) => async (dispatch) => {
    try {
      console.log(index);
        const storageRef = ref(storage, file.name);
        const metadata = {
            contentType: 'image/jpeg'
        };
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
       
        uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            let docRef =  doc(db, "users", 'user5' );
            let urls= {[`img${index+1}`]:downloadURL}
           let res = setDoc(docRef, { urls }, { merge: true });
            console.log('File available at', downloadURL);
            dispatch({
                type: 'UPLOAD_IMAGE',
                payload: downloadURL
            });
            setLoading(false)
          });
        }
      );
      
    } catch (error) {
        console.log("error", error);
    } finally {
        setLoading(false)
    }
}

