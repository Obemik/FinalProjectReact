import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Blog.module.css';
import { articles } from '../../../assets/data/blogs/blogs';

export default function Blog() {
    const { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id));

    if (!article) {
        return (
            <div className={styles.notFound}>
                <h2>Article not found</h2>
                <Link to="/blogs">Back to Articles</Link>
            </div>
        );
    }

    return (
        <section className={styles.blogSection}>
            <div className={styles.blogHeader}>
                <h1 className={styles.blogTitle}>{article.title}</h1>
                
                <div className={styles.authorInfo}>
                    <span className={styles.authorName}>— {article.author}</span>
                </div>

                <div className={styles.heroImage}>
                    <img src={article.img} alt={article.title} />
                </div>
            </div>
            <div className={styles.blogContainer}>
                <div className={styles.blogContent}>
                    <h2 className={styles.subtitle}>{article.subtitle}</h2>
                    
                    <p className={styles.mainText}>{article.text}</p>

                    {article.list && article.list.length > 0 && (
                        <ol className={styles.blogList}>
                            {article.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    )}

                    <p className={styles.paragraph}>{article.paragraph}</p>

                    {article.middleImage && (
                        <div className={styles.middleImage}>
                            <img src={article.middleImage} alt="Article illustration" />
                        </div>
                    )}

                    <p className={styles.conclusion}>{article.conclusion}</p>

                    {article.quote && (
                        <div className={styles.quoteBlock}>
                            <p className={styles.quote}>{article.quote}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}