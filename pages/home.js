import styles from '../styles/Home.module.css'
import withAuth from '../components/withAuth/WithAuth'
import Image from 'next/image'
import useHome from '../customHooks/useHome'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';
const Home = ({use}) => {
    const [laoding, selectedImages, ,
        handleRemoveItem, handleChange, onClickHandel1, , onClickHandel2,  ] = useHome()
    return (
        <div className={styles.file}>
            <Container fluid className={styles.body}>
                <Container id={styles.loginBox}>
                    <Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12} className={styles.uploadHeading}>
                                Upload Images
                                <div className={styles.iconBox}>
                                    <label htmlFor="inputImg1">
                                        <Image src='/assets/camera.png' alt="" width={40} height={40} className={styles.uploadIcon} />

                                    </label>
                                    <input type="file" multiple id='inputImg1' name='file[]' onChange={handleChange} className={styles.input} />
                                </div>
                            </Col>
                        </Row>
                        {
                            selectedImages.map((url, index) => {
                                return <Col lg={1} md={2} sm={2} xs={3} xxs={6}>
                                    <div className={styles.imagesBox}>
                                        <Image layout="fill" objectFit="cover" src={url} alt="" />
                                        <div className={styles.cross} onClick={(e) => handleRemoveItem(url, index)}>X</div>
                                    </div>
                                </Col>
                            })
                        }

                        {
                            laoding && <div className={styles.spinnerContainer}><Row> <Spinner animation="border" className={styles.spinner} role="status" /></Row>
                            <Row><p className={styles.spinnerText}>Uploading...</p></Row></div>
                        }
                    </Row>
                    <Row>
                        {selectedImages.length != 0 && <button onClick={onClickHandel1} className={styles.btn}>Upload</button>}

                    </Row>
                    <div className={styles.imagesContainer}>
                        <div className={styles.groupBox}>

                        </div>

                    </div>
                </Container>
            </Container>
        </div>
    )
}
export default withAuth(Home)
