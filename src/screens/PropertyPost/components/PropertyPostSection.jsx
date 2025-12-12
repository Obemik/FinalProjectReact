import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './PropertyPostSection.module.css';

export default function PropertyPostSection() {
    const navigate = useNavigate();
    const formRef = useRef(null);
    
    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        title: "",
        propertyType: "",
        listingType: "",
        location: "",
        address: "",
        price: "",
        bedrooms: "",
        parking: "",
        constructionSqft: "",
        landSqft: "",
        description: "",
        amenities: [],
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const amenitiesList = [
        "Garden",
        "Pool",
        "Vigilance",
        "Laundry",
        "Security Cameras",
        "Video Surveillance",
        "Dish Washer",
        "Internet",
        "Elevator",
        "Jacuzzi",
        "Solar Panel",
        "Garage",
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckbox = (amenity) => {
        setFormData((prev) => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter((a) => a !== amenity)
                : [...prev.amenities, amenity]
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName?.trim()) newErrors.fullName = "Full name is required";
        if (!formData.email?.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.phone?.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) {
            newErrors.phone = "Phone number is invalid";
        }
        if (!formData.title?.trim()) newErrors.title = "Listing title is required";
        if (!formData.propertyType?.trim()) newErrors.propertyType = "Property type is required";
        if (!formData.listingType?.trim()) newErrors.listingType = "Listing type is required";
        if (!formData.location?.trim()) newErrors.location = "Location is required";
        if (!formData.address?.trim()) newErrors.address = "Address is required";
        if (!formData.price?.trim()) {
            newErrors.price = "Price is required";
        } else if (isNaN(formData.price)) {
            newErrors.price = "Price must be a number";
        }
        if (!formData.bedrooms?.trim()) newErrors.bedrooms = "Number of bedrooms is required";
        if (!formData.parking?.trim()) newErrors.parking = "Parking lots are required";
        if (!formData.constructionSqft?.trim()) {
            newErrors.constructionSqft = "Construction Sqft is required";
        } else if (isNaN(formData.constructionSqft)) {
            newErrors.constructionSqft = "Must be a number";
        }
        if (!formData.landSqft?.trim()) {
            newErrors.landSqft = "Land Sqft is required";
        } else if (isNaN(formData.landSqft)) {
            newErrors.landSqft = "Must be a number";
        }
        if (!formData.description?.trim()) newErrors.description = "Description is required";
        if (!formData.amenities || formData.amenities.length === 0) {
            newErrors.amenities = "Select at least one amenity";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess(false);
            return;
        }
        setErrors({});
        setSuccess(true);
        console.log('Property submitted:', formData);

        setFormData({
            fullName: "",
            email: "",
            phone: "",
            title: "",
            propertyType: "",
            listingType: "",
            location: "",
            address: "",
            price: "",
            bedrooms: "",
            parking: "",
            constructionSqft: "",
            landSqft: "",
            description: "",
            amenities: [],
        });
    };

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                    <h2 className={styles.title}>Post Your <br /> Property</h2>
                    <div className={styles.headerRight}>
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui<br />
                            tellus morbi integer neque, malesuada ac nulla tellu
                        </p>
                        <div className={styles.buttons}>
                            <button className={styles.btnOrange} onClick={scrollToForm}>
                                Post your property
                            </button>
                            <button className={styles.btnWhite} onClick={() => navigate('/about')}>
                                About Us
                            </button>
                        </div>
                    </div>
                </div>
            <div className={styles.containerForm}>
                <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                    <h3 className={styles.subtitle}>Client Info</h3>
                    <div className={styles.grid2}>
                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="fullName"
                                placeholder="Enter Your Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="email"
                                className={styles.input}
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className={styles.error}>{errors.email}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="phone"
                                placeholder="Your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                        </div>
                    </div>

                    <h3 className={styles.subtitle}>Property Info</h3>
                    <div className={styles.grid2}>
                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="title"
                                placeholder="Listing Title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                            {errors.title && <p className={styles.error}>{errors.title}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="propertyType"
                                placeholder="Property Type"
                                value={formData.propertyType}
                                onChange={handleChange}
                            />
                            {errors.propertyType && <p className={styles.error}>{errors.propertyType}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="listingType"
                                placeholder="Listing Type"
                                value={formData.listingType}
                                onChange={handleChange}
                            />
                            {errors.listingType && <p className={styles.error}>{errors.listingType}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="location"
                                placeholder="Location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                            {errors.location && <p className={styles.error}>{errors.location}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <p className={styles.error}>{errors.address}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="price"
                                placeholder="Listing Price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                            {errors.price && <p className={styles.error}>{errors.price}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="bedrooms"
                                placeholder="Bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                            />
                            {errors.bedrooms && <p className={styles.error}>{errors.bedrooms}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="parking"
                                placeholder="Parking Lots"
                                value={formData.parking}
                                onChange={handleChange}
                            />
                            {errors.parking && <p className={styles.error}>{errors.parking}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="constructionSqft"
                                placeholder="Construction Sqft"
                                value={formData.constructionSqft}
                                onChange={handleChange}
                            />
                            {errors.constructionSqft && <p className={styles.error}>{errors.constructionSqft}</p>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                className={styles.input}
                                name="landSqft"
                                placeholder="Land Sqft"
                                value={formData.landSqft}
                                onChange={handleChange}
                            />
                            {errors.landSqft && <p className={styles.error}>{errors.landSqft}</p>}
                        </div>
                    </div>

                    <div className={styles.inputWrapper}>
                        <textarea
                            name="description"
                            placeholder="Listing Description..."
                            value={formData.description}
                            onChange={handleChange}
                            className={styles.textarea}
                        />
                        {errors.description && <p className={styles.error}>{errors.description}</p>}
                    </div>

                    <h3 className={styles.subtitle}>Property Amenities</h3>
                    <div className={styles.checkboxGroup}>
                        {amenitiesList.map((amenity) => (
                            <label key={amenity} className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={formData.amenities.includes(amenity)}
                                    onChange={() => handleCheckbox(amenity)}
                                />
                                {amenity}
                            </label>
                        ))}
                    </div>
                    {errors.amenities && <p className={styles.error}>{errors.amenities}</p>}

                    <button className={styles.btnOrangeSubmit} type="submit">
                        Submit for approval
                    </button>
                    {success && <p className={styles.success}>Property submitted successfully!</p>}
                </form>
            </div>
        </section>
    );
};

