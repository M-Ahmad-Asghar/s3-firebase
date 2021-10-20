import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useHome from '../customHooks/useHome'
const Home = () => {
    const [img1, img2, img3, handleImageUpload1, handleImageUpload2, handleImageUpload3,
        onClickHandel1, ] = useHome()
    return (
        <div className={styles.file}>
            <div className={styles.body}>
                <div id={styles.loginBox}>
                <button onClick={onClickHandel1} className={styles.btn}>Upload</button>

                    <div className={styles.imagesContainer}>
                        <div className={styles.groupBox}>
                            <div className={styles.imagesBox}>
                                <label htmlFor="inpitImg1"> {img1.url == '' && <Image src='/uploadIcon.png' alt="" width={70} height={70} className={styles.uploadIcon}/>}
                                    <img src={img1.url} alt="" className={styles.images} />
                                </label>
                                <input type="file" name="" id="inpitImg1"
                                    className={styles.inputImgTag}
                                    onChange={handleImageUpload1}
                                />

                            </div>
                            
                        </div>
                        <div className={styles.groupBox}>
                            <div className={styles.imagesBox}>
                                <label htmlFor="inpitImg2"> {img2.url == '' && <Image src='/uploadIcon.png' alt="" width={70} height={70} className={styles.uploadIcon}/>}
                                    <img src={img2.url} alt="" className={styles.images} />
                                </label>

                                <input type="file" name="" id="inpitImg2"
                                    className={styles.inputImgTag}
                                    onChange={handleImageUpload2}
                                />

                            </div>
                        </div>
                        <div className={styles.groupBox}>
                            <div className={styles.imagesBox}>
                                <label htmlFor="inpitImg3"> {img3.url == '' && <Image src='/uploadIcon.png' alt="" width={70} height={70} className={styles.uploadIcon}/>}
                                    <img src={img3.url} alt="" className={styles.images} />
                                </label>

                                <input type="file" name="" id="inpitImg3"
                                    className={styles.inputImgTag}
                                    onChange={handleImageUpload3}
                                />

                            </div>
                        </div>
                   
                   
                   
                    
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
