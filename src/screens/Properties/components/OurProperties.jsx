import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaHome, FaRegFileAlt } from "react-icons/fa";
import styles from './OurProperties.module.css';
import { houses } from '../../../assets/data/properties/properties';
import sqftIcon from '../../../assets/img/home/sqft.png';
import bedIcon from '../../../assets/img/home/bed.png';
import bathIcon from '../../../assets/img/home/bath.png';

export default function OurProperties() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");
    const [property, setProperty] = useState("");
    const [type, setType] = useState("");

    const filtered = houses.filter((p) => {
        const searchText = search.toLowerCase();
        return (
            (p.location.toLowerCase().includes(searchText) ||
                p.city.toLowerCase().includes(searchText) ||
                p.property.toLowerCase().includes(searchText) ||
                p.type.toLowerCase().includes(searchText)) &&
            (city ? p.city.toLowerCase() === city.toLowerCase() : true) &&
            (property ? p.property.toLowerCase() === property.toLowerCase() : true) &&
            (type ? p.type.toLowerCase() === type.toLowerCase() : true)
        );
    });

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Browse Our Properties</h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui tellus morbi <br />
                    integer neque, malesuada ac nulla tellu
                </p>
                
                <div className={styles.buttons}>
                    <button
                        className={styles.btnOrange}
                        onClick={() => navigate("/property-post")}
                    >
                        Post a property
                    </button>
                    <button
                        className={styles.btnWhite}
                        onClick={() => navigate("/about")}
                    >
                        About EstatePro
                    </button>
                </div>

                <div className={styles.filters}>
                    <div className={styles.inputGroup}>
                        <div className={styles.inputBox}>
                            <FaMapMarkerAlt className={styles.icon} />
                            <input
                                placeholder="Search properties"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className={styles.input}
                            />
                        </div>
                        <button className={styles.searchBtn}>Search Now</button>
                    </div>
                    
                    <div className={styles.selectGroup}>
                        <FaMapMarkerAlt className={styles.icon} />
                        <select
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className={styles.select}
                        >
                            <option value="">Location</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="New York">New York</option>
                            <option value="Chicago">Chicago</option>
                        </select>
                    </div>

                    <div className={styles.selectGroup}>
                        <FaHome className={styles.icon} />
                        <select
                            value={property}
                            onChange={(e) => setProperty(e.target.value)}
                            className={styles.select}
                        >
                            <option value="">Property</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Penthouse">Penthouse</option>
                            <option value="Villa">Villa</option>
                        </select>
                    </div>

                    <div className={styles.selectGroup}>
                        <FaRegFileAlt className={styles.icon} />
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className={styles.select}
                        >
                            <option value="">Type</option>
                            <option value="For Sale">For Sale</option>
                            <option value="For Rent">For Rent</option>
                        </select>
                    </div>
                </div>

                <div className={styles.container}>
                    {filtered.map((house, index) => (
                        <Link 
                            key={house.id} 
                            className={`${styles.card} ${index % 2 === 1 ? styles.cardShift : ''}`}
                            to={`/properties/${house.id}`}
                        >
                            <img className={styles.img} src={house.img} alt={house.location} />
                            <div className={styles.line}></div>
                            <p className={styles.price}>{house.price}</p>
                            <p className={styles.location}>{house.location}</p>
                            <div className={styles.details}>
                                <div className={styles.detailBox}>
                                    <img className={styles.icon} src={sqftIcon} alt="sqft" />
                                    <span>{house.sqft}</span>
                                </div>
                                <div className={styles.detailBox}>
                                    <img className={styles.icon} src={bedIcon} alt="bed" />
                                    <span>{house.bed}</span>
                                </div>
                                <div className={styles.detailBox}>
                                    <img className={styles.icon} src={bathIcon} alt="bath" />
                                    <span>{house.bath}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}