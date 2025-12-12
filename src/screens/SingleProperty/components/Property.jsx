import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import styles from './Property.module.css';
import { houses } from '../../../assets/data/properties/properties';
import propertyGallery from '../../../assets/img/properties/propertyGroup.png';

export default function Property() {
    const { id } = useParams();
    const property = houses.find(house => house.id === parseInt(id));
    const navigate = useNavigate();
    
    const [showContactModal, setShowContactModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    
    const scrollToContactForm = () => {
        if (window.innerWidth <= 768) {
            setShowContactModal(true);
        } else {
            const formSection = document.getElementById('contactForm');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    if (!property) {
        return (
            <div className={styles.notFound}>
                <h2>Property not found</h2>
                <Link to="/properties">Back to Properties</Link>
            </div>
        );
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        setShowContactModal(false);
        setShowSuccessModal(true);
        
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const closeContactModal = () => {
        setShowContactModal(false);
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className={styles.propertyPage}>
            {/* Header Section */}
            <section className={styles.headerSection}>
                <div className={styles.container}>
                    <h1 className={styles.mainTitle}>Property Details</h1>
                    <div className={styles.breadcrumb}>
                        <Link to="/">Home</Link> / <Link to="/properties">Properties</Link> / <span>Details</span>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.btnOrange} onClick={scrollToContactForm}>Request Info</button>
                        <button className={styles.btnWhite} onClick={() => navigate('/properties')}>Show more</button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    {/* Property Image */}
                    <div className={styles.imageWrapper}>
                        <img 
                            src={property.img} 
                            alt={property.location} 
                            className={styles.mainImage}
                        />
                        <div className={styles.priceTag}>{property.price}</div>
                        <p className={styles.category}>Lorem ipsum</p>
                        <h2 className={styles.propertyTitle}>{property.location}</h2>
                    </div>

                    <div className={styles.mainContent}>
                        {/* Left Column */}
                        <div className={styles.leftColumn}>
                            {/* Property Info */}
                            <div className={styles.propertyInfo}>
                                <p className={styles.description}>{property.description}</p>
                            </div>

                            {/* About the property */}
                            <div className={styles.aboutSection}>
                                <h3 className={styles.sectionTitle}>About the property</h3>
                                <p className={styles.description}>{property.description}</p>
                                <ul className={styles.aboutList}>
                                    {property.about.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <p className={styles.description}>
                                    Enim lacinia dictum posuere aliquet lectus ut dignissim. Iaculis quam et aliquet. 
                                    Tristique ultricies tristique id libero ultricies quam vel. Ipsum sit congue volutpat 
                                    diam eget sed vestibulum. Id aliquam neque, malesuada turpis amet. Dui egestas risus 
                                    amet tortor ut feugiat dior sit amet kolly.
                                </p>
                            </div>

                            {/* Property Amenities */}
                            <div className={styles.amenitiesSection}>
                                <h3 className={styles.sectionTitle}>Property amenities</h3>
                                <div className={styles.amenitiesList}>
                                    {property.amenities.map((amenity, index) => (
                                        <div key={index} className={styles.amenityItem}>
                                            <FaCheck className={styles.checkIcon} />
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form (Hidden on mobile) */}
                        <div className={styles.rightColumn}>
                            <div className={styles.contactCard} id="contactForm">
                                <h4 className={styles.contactTitle}>Property Rate</h4>
                                <p className={styles.propertyPrice}>{property.price}</p>
                                <hr />
                                
                                <h4 className={styles.contactFormTitle}>Get in touch to get more info</h4>
                                
                                <form onSubmit={handleSubmit} className={styles.contactForm}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        rows="4"
                                        required
                                    />
                                    <button type="submit" className={styles.submitBtn}>
                                        Request info
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Property Gallery */}
                    <div className={styles.gallerySection}>
                        <h3 className={styles.galleryTitle}>Property Gallery</h3>
                        <img 
                            src={propertyGallery} 
                            alt="Property Gallery" 
                            className={styles.galleryImage}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Modal for Mobile */}
            {showContactModal && (
                <div className={styles.modalOverlay} onClick={closeContactModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeContactModal}>
                            <FaTimes />
                        </button>
                        
                        <h4 className={styles.modalTitle}>Get in touch to get more info</h4>
                        <p className={styles.modalPrice}>{property.price}</p>
                        
                        <form onSubmit={handleSubmit} className={styles.modalForm}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.modalInput}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.modalInput}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.modalTextarea}
                                rows="4"
                                required
                            />
                            <button type="submit" className={styles.modalSubmitBtn}>
                                Request info
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className={styles.modalOverlay} onClick={closeSuccessModal}>
                    <div className={styles.successModalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeSuccessModal}>
                            <FaTimes />
                        </button>
                        
                        <div className={styles.successIcon}>
                            <FaCheck />
                        </div>
                        
                        <h3 className={styles.successTitle}>Thank you!</h3>
                        <p className={styles.successMessage}>
                            Our manager will contact you shortly
                        </p>
                        
                        <button className={styles.successBtn} onClick={closeSuccessModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}