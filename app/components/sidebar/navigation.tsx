import { Colors, StyleSheet } from "~/utils/StyleSheet";
import { useState, useEffect } from "react";

interface NavigationProps {
    onSectionChange: (section: string) => void;
    currentSection: string;
}

export function Navigation({ onSectionChange, currentSection }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const menuItems = [
        { label: 'About', id: 'about' },
        { label: 'Experience', id: 'experience' },
        { label: 'Contact', id: 'contact' }
    ];

    const styles = StyleSheet.create({
        nav: {
            width: '100%',
            marginTop: '2rem',
            position: 'relative' 
        },
        menuToggle: {
            display: isMobile ? 'block' : 'none',
            padding: '0.5rem',
            fontSize: '1.5rem',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            color: Colors.text.primary,
            width: '100%',
            textAlign: 'right'
        },
        menuContainer: {
            position: isMobile ? 'absolute' : 'static',
            top: isMobile ? '100%' : 'auto',
            left: isMobile ? 0 : 'auto',
            width: isMobile ? '100%' : 'auto',
            background: Colors.text.light,
            boxShadow: isMobile ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
            borderRadius: isMobile ? '0 0 0.5rem 0.5rem' : '0',
            padding: isMobile ? '0.5rem' : '0',
            display: isMobile ? (isMenuOpen ? 'block' : 'none') : 'block',
            zIndex: 1000 
        },
        menuItem: {
            padding: '0.75rem 1rem',
            margin: '0.25rem 0',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: Colors.text.primary,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: 'transparent',
            width: '100%',
            textAlign: 'left',
            border: 'none'
        },
        menuItemActive: {
            backgroundColor: Colors.secondary + '20',
            color: Colors.secondary,
            fontWeight: 500
        },
        menuItemHovered: {
            backgroundColor: Colors.secondary + '10',
            color: Colors.secondary
        }
    });

    return (
        <nav style={styles.nav}>
            <button 
                style={styles.menuToggle}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>
            <div style={styles.menuContainer}>
                {menuItems.map((item) => (
                    <button 
                        key={item.id}
                        style={{
                            ...styles.menuItem,
                            ...(currentSection === item.id ? styles.menuItemActive : {}),
                            ...(hoveredItem === item.id ? styles.menuItemHovered : {})
                        }}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => {
                            onSectionChange(item.id);
                            setIsMenuOpen(false);
                            setHoveredItem(null);
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}