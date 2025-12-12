import React from "react"
import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"
import errorImage from "../../../assets/img/errorpage/errorImage.png"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={styles.notfoundPage}>
            <div className={styles.notfoundContainer}>
                <div className={styles.notfoundImage}>
                    <img src={errorImage} alt="404 Error" />
                </div>
                <h1 className={styles.notfoundTitle}>Page Not Found</h1>
                <p className={styles.notfoundDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sit tellus morbi 
                    integer neque, molestie ac no nulla molestada ac nulla tellus
                </p>
                <div className={styles.notfoundButtons}>
                    <Link to="/" className={styles.btnHomepage}>
                        Go to Homepage
                    </Link>
                    <button onClick={() => navigate(-1)} className={styles.btnProperties}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}