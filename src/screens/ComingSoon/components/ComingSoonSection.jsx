import React from "react"
import styles from "./ComingSoonSection.module.css"
import constructionImage from "../../../assets/img/comingsoon/constructionImage.png"

export default function ComingSoonSection() {
    return (
        <div className={styles.constructionPage}>
            <div className={styles.constructionContainer}>
                <div className={styles.constructionImage}>
                    <img src={constructionImage} alt="Under Construction" />
                </div>
                <h1 className={styles.constructionTitle}>Our website is under construction</h1>
                <p className={styles.constructionDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui tellus morbi 
                    integer neque, malesuada ac nulla tellus malesuada ac nulla tellus
                </p>
            </div>
        </div>
    )
}