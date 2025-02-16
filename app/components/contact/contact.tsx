import React from 'react';
import { StyleSheet, Colors, typography } from '~/utils/StyleSheet';
import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactLink {
    name: string;
    icon: React.ReactNode;
    url: string;
    description: string;
}

export function Contact() {
    const contactLinks: ContactLink[] = [
        {
            name: 'GitHub',
            icon: <Github size={32} />,
            url: 'https://github.com/luichozz',
            description: 'Check out my projects and contributions'
        },
        {
            name: 'Email',
            icon: <Mail size={32} />,
            url: 'mailto:contact@joseespinozadev.com',
            description: 'Get in touch via email'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={32} />,
            url: 'https://www.linkedin.com/in/jose-espinozaglz/',
            description: 'Connect with me professionally'
        }
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Let's Connect!</h1>
            <p style={styles.subtitle}>Feel free to reach out through any of these platforms</p>
            
            <div style={styles.cardsContainer}>
                {contactLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.card}
                    >
                        <div style={styles.iconContainer}>
                            {link.icon}
                        </div>
                        <h2 style={styles.cardTitle}>{link.name}</h2>
                        <p style={styles.cardDescription}>{link.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        opacity: 0,
        animation: 'slideUp 0.5s ease-out forwards',
        '@media (max-width: 768px)': {
            padding: '1rem'
        }
    },
    title: {
        fontFamily: typography.primary,
        fontSize: '2.5rem',
        color: Colors.secondary,
        marginBottom: '1rem',
        textAlign: 'center',
        '@media (max-width: 768px)': {
            fontSize: '2rem'
        }
    },
    subtitle: {
        fontFamily: typography.primary,
        fontSize: '1.2rem',
        color: Colors.text.primary,
        marginBottom: '3rem',
        textAlign: 'center',
        opacity: 0.8,
        '@media (max-width: 768px)': {
            fontSize: '1rem',
            marginBottom: '2rem'
        }
    },
    cardsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            gap: '1rem'
        }
    },
    card: {
        backgroundColor: Colors.text.light,
        borderRadius: '1rem',
        padding: '2rem',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)'
        }
    },
    iconContainer: {
        backgroundColor: Colors.background,
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem auto',
        color: Colors.secondary
    },
    cardTitle: {
        fontFamily: typography.primary,
        fontSize: '1.5rem',
        color: Colors.text.primary,
        marginBottom: '0.5rem'
    },
    cardDescription: {
        fontFamily: typography.primary,
        fontSize: '1rem',
        color: Colors.text.primary,
        opacity: 0.8
    }
})