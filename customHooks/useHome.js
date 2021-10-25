import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authStateChk } from '../store/actions/AuthAction'
import { uploadData, } from '../store/actions/Action'
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
const useHome = () => {

  const user = useSelector(state => state.authReducer.user)
  const [success, setSuccess] = useState(false)
  const [laoding, setLaoding] = useState(false)
  const [images, setImages] = useState([])
  const [selectedImages, setSelectedImages] = useState([])
  const [pending, setPending] = useState(true)
  const Router = useRouter();

  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(authStateChk(setPending))
    if (!user) {
      Router.push("login");
    }
  }, [user]);
  const onClickHandel1 = () => {
    { dispatch(uploadData(setLaoding, images, user, setSuccess)), setSelectedImages([]), setImages([]) }
  }
  const handleChange = (e) => {
    if (e.target.files) {
      const imgFiles = Array.from(e.target.files)
      setImages((prevImages) => prevImages.concat(imgFiles))
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setSelectedImages((prevImages) => prevImages.concat(fileArray))

      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
    }
  }
  function onClickHandel2() {
    dispatch(authStateChk(setLaoding))
  }
  const handleRemoveItem = (value, files) => {
    const items = selectedImages;
    const pics = images;
    if (items.length > 0) {
      setSelectedImages(items.filter((item) => item !== value));
      setImages(pics.filter((item, index) => index !== files));

    }
  };

    return [laoding, selectedImages, ,
      handleRemoveItem, handleChange, onClickHandel1, , onClickHandel2,]
  }

export default useHome
