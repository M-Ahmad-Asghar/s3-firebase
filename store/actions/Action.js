import { collection, getDocs, doc, getDoc, addDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db, storage } from "../../config/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

export const uploadData = (setLoading, images, user, setSuccess) => async (dispatch) => {

    try {
        setLoading(true)
        const imagesUplaod = []
        images.map(async (file, index) => {
            const storageRef = ref(storage, file.name);
            const metadata = {
                contentType: 'image/jpeg'
            };
            imagesUplaod.push(uploadBytesResumable(storageRef, file, metadata))
        });
        const uploadedImages = await Promise.all(imagesUplaod)

        const urlPromise = []
        uploadedImages.map((file) => {
            urlPromise.push(getDownloadURL(file.ref))
        })
        const urls = await Promise.all(urlPromise)

        const urlUpload = []
        urls.map((url) => {
            let docRef = doc(db, "users", user.uid);
            urlUpload.push(updateDoc(docRef, {
                urls: arrayUnion(url)
            })
            )
        })
        const urlsUpload = await Promise.all(urlUpload)
        
        dispatch({
            type: 'UPLOAD_IMAGE',
            payload: urlsUpload
        });
        setLoading(false)
        toast.success('Images successfully uploaded!', {
            position: "top-center",
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
    } catch (error) {
        console.log("error", error);
    } finally {
        setLoading(false)
    }
}

