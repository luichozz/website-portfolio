import React, { useState, useEffect } from 'react';
import { StyleSheet, Colors, typography } from '~/utils/StyleSheet';

export function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        '/cio_luncheon.jpg',
        '/cio_luncheon2.jpg',
        '/bestbuy_office.jpg',
        '/bestbuy_penn.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.carouselContainer}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.imageSlide,
                            opacity: index === currentImageIndex ? 1 : 0,
                            transform: index === currentImageIndex ? 'scale(1)' : 'scale(0.98)',
                            zIndex: index === currentImageIndex ? 1 : 0
                        }}
                    >
                        <div style={styles.imageOverlay} />
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={styles.image}
                        />
                    </div>
                ))}
            </div>
            
            <div style={styles.contentWrapper}>
                <div style={styles.contentOverlay}>
                    <span style={styles.subtitle}>Software Engineer</span>
                    <h1 style={styles.title}>About Me</h1>
                    
                    <div style={styles.content}>
                        <p style={styles.text}>
                            Hello! I'm <span style={styles.highlight}>Jose</span>, a passionate Software Engineer based in Minneapolis, MN. 
                            With a deep love for technology and problem-solving, I've dedicated my career 
                            to creating innovative solutions that make a difference.
                        </p>
                        
                        <p style={styles.text}>
                            My journey in software development began at Best Buy as an Intern. Since then, 
                            I've had the opportunity to work on diverse projects, from mobile applications 
                            to complex web platforms, always striving to deliver exceptional results.
                        </p>
                        
                        <p style={styles.text}>
                            When I'm not coding, you can find me traveling around the world. I believe in 
                            continuous learning and staying updated with the latest technologies while 
                            maintaining a healthy work-life balance.
                        </p>
                    </div>
                </div>
                <div style={styles.dots}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            style={{
                                ...styles.dot,
                                backgroundColor: index === currentImageIndex 
                                    ? Colors.secondary 
                                    : 'transparent',
                                border: `2px solid ${Colors.secondary}`
                            }}
                            onClick={() => setCurrentImageIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
    },
    carouselContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageSlide: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        transition: 'all 1s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
        zIndex: 1
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center 30%',
        transform: 'scale(0.95)'
    },
    contentWrapper: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '550px',
        margin: '0 8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        '@media (max-width: 1024px)': {
            margin: '0 4rem'
        },
        '@media (max-width: 768px)': {
            margin: '0 2rem'
        }
    },
    contentOverlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderRadius: '1.5rem',
        padding: '2.5rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        animation: 'slideUp 0.5s ease-out forwards',
        '@media (max-width: 768px)': {
            padding: '1.5rem'
        }
    },
    subtitle: {
        fontFamily: typography.primary,
        fontSize: '0.9rem',
        color: Colors.secondary,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '0.5rem',
        display: 'block',
        fontWeight: 500
    },
    title: {
        fontFamily: typography.primary,
        fontSize: '2.5rem',
        color: Colors.text.primary,
        marginBottom: '1.5rem',
        fontWeight: 700,
        '@media (max-width: 768px)': {
            fontSize: '2rem'
        }
    },
    content: {
        position: 'relative'
    },
    text: {
        fontFamily: typography.primary,
        fontSize: '1rem',
        color: Colors.text.primary,
        lineHeight: 1.7,
        marginBottom: '1.25rem',
        opacity: 0.9,
        '@media (max-width: 768px)': {
            fontSize: '0.95rem',
            lineHeight: 1.6
        }
    },
    highlight: {
        color: Colors.secondary,
        fontWeight: 600
    },
    dots: {
        display: 'flex',
        gap: '0.75rem',
        paddingLeft: '2.5rem',
        '@media (max-width: 768px)': {
            paddingLeft: '1.5rem'
        }
    },
    dot: {
        width: '0.6rem',
        height: '0.6rem',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        padding: 0,
        outline: 'none',
        ':hover': {
            transform: 'scale(1.2)'
        }
    }
})