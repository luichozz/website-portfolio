// components/Dashboard/Dashboard.tsx
import { useEffect, useState } from "react";
import { StyleSheet, Colors, keyframes, typography } from "~/utils/StyleSheet";
import { Sidebar } from "../sidebar";
import { ExperienceSection } from "../experience/experienceSection";
import { About } from "../about/about";
import { Contact } from "../contact/contact"

export function Dashboard() {
    const [currentSection, setCurrentSection] = useState('experience');
    const [isAnimating, setIsAnimating] = useState(false);
    
    useEffect(() => {
        // Create style element for keyframes
        const style = document.createElement('style');
        style.textContent = keyframes.slideUp;
        document.head.appendChild(style);

        // Cleanup function
        return () => {
            try {
                if (style.parentNode === document.head) {
                    document.head.removeChild(style);
                }
            } catch (error) {
                console.warn('Style element already removed:', error);
            }
        };
    }, []);

    const renderContent = () => {
        switch(currentSection) {
            case 'about':
                return (
                    <div style={styles.contentSection}>
                        <About />
                    </div>
                );
            case 'experience':
                return (
                    <div style={styles.contentSection}>
                        <div style={styles.bio}>
                            <h1 style={styles.title}>Hello, Hola, Olá, Salut, こんにちは!</h1>
                            <h2 style={styles.description}>
                                Jose is a Software Engineer with a passion for crafting exceptional user experiences. 
                                He specializes in front-end and mobile development, leveraging technologies like React Native, 
                                TypeScript, and JavaScript to build innovative solutions. His expertise in UI component development 
                                and API integration reflects his commitment to creating user-friendly, robust applications while 
                                continuously exploring new technologies. He's currently working as an Associate Engineer at Best Buy.
                            </h2>
                        </div>
                        <ExperienceSection />
                    </div>
                );
            case 'contact':
              return (
                <div style={styles.contentSection}>
                  <Contact/>
                  </div>
              )
                
            default:
                return null;
        }
    };

    return (
        <div style={styles.container}>
            <Sidebar 
                onSectionChange={setCurrentSection}
                currentSection={currentSection}
            />
            <div style={styles.mainContent}>
                {renderContent()}
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: '100vh',
        backgroundColor: Colors.background,
        display: 'flex'
    },
    mainContent: {
        flex: 1,
        marginLeft: '250px',
        padding: '1rem',
        '@media (max-width: 768px)': {
            marginLeft: 0,
            padding: '0.5rem'
        }
    },
    contentSection: {
        opacity: 0,
        animation: 'slideUp 0.5s ease-out forwards'
    },
    bio: {
        maxWidth: '1800px',
        maxHeight: 'fit-content',
        padding: '1rem',
        backgroundColor: Colors.text.light,
        borderRadius: '0.5rem',
        borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
        boxShadow: '0 4px 4px -2px rgba(0, 0, 0, 0.1)',
        opacity: 0,
        animation: 'slideUp 1s ease-out forwards',
        '@media (max-width: 767px)': {
            maxWidth: '95vw',
            padding: '1rem',
            margin: '0.5rem 0'
        }
    },
    title: {
        fontFamily: typography.primary,
        color: Colors.secondary,
        fontSize: '1.25rem',
        marginBottom: '1rem',
        '@media (max-width: 767px)': {
            fontSize: '1.1rem'
        }
    },
    description: {
        fontFamily: typography.primary,
        background: `linear-gradient(to right, ${Colors.text.primary}CC, ${Colors.text.primary})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        fontSize: '1.5rem',
        lineHeight: '1.5',
        fontWeight: 550,
        '@media (max-width: 767px)': {
            fontSize: '1rem',
            lineHeight: '1.6'
        }
    }
});