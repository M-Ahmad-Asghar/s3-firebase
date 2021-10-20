import { useState } from 'react'
import { uploadData } from '../store/actions/Action'
import { useDispatch, useSelector } from 'react-redux'
const useHome = () => {
    const [laoding, setLaoding] = useState(true)
    const [img1, setImg1] = useState({ url: '', data: {}})
    const [img2, setImg2] = useState({ url: '', data: {} })
    const [img3, setImg3] = useState({ url: '', data: {} })
    let imgArray =[img1, img2, img3]
    const dispatch = useDispatch();
   const  onClickHandel1= () =>{
       imgArray.map((pic, index)=>{
        dispatch(uploadData(setLaoding, pic.data, index ))
       })
    
   }
   console.log(`img1 ,${img1.url} img2,${img2.url} img3 ${img3.url}`);
    const handleImageUpload1 = e => {
        const file = e.target.files[0]
        setImg1(
            {
                url: URL.createObjectURL(file),
                data: file
            })
    };
    const handleImageUpload2 = e => {
        const file = e.target.files[0]
        setImg2(
            {
                url: URL.createObjectURL(file),
                data: file
            })
    };
    const handleImageUpload3 = e => {
        const file = e.target.files[0]
        setImg3(
            {
                url: URL.createObjectURL(file),
                data: file
            })
    };
    return [img1, img2, img3,handleImageUpload1,
         handleImageUpload2, handleImageUpload3, onClickHandel1,]
}

export default useHome
