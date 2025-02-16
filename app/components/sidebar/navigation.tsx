import { Colors, StyleSheet } from "~/utils/StyleSheet";
import { useState } from "react";

interface NavigationProps {
    onSectionChange: (section: string) => void;
    currentSection: string;
  }
  
  export function Navigation({ onSectionChange, currentSection }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const menuItems = [
        { label: 'About', id: 'about' },
        { label: 'Experience', id: 'experience' },
        { label: 'Contact', id: 'contact' }
      ];
  
    const styles = StyleSheet.create({
      nav: {
        width: '100%',
        marginTop: '2rem'
      },
      menuToggle: {
        display: window.innerWidth <= 768 ? 'block' : 'none',
        padding: '0.5rem',
        fontSize: '1.5rem',
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        color: Colors.text.primary
      },
      menuContainer: {
        position: window.innerWidth <= 768 ? 'absolute' : 'static',
        top: window.innerWidth <= 768 ? '100%' : 'auto',
        left: window.innerWidth <= 768 ? 0 : 'auto',
        width: window.innerWidth <= 768 ? '100%' : 'auto',
        background: Colors.text.light,
        boxShadow: window.innerWidth <= 768 ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        borderRadius: window.innerWidth <= 768 ? '0 0 0.5rem 0.5rem' : '0',
        padding: window.innerWidth <= 768 ? '0.5rem' : '0',
        display: window.innerWidth <= 768 ? (isMenuOpen ? 'block' : 'none') : 'block'
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
        backgroundColor: 'transparent'
      },
      menuItemActive: {
        backgroundColor: Colors.secondary + '20',
        color: Colors.secondary,
        fontWeight: 500
      },
      menuItemHovered: {
        backgroundColor: Colors.secondary + '10',
        color: Colors.secondary
      },
      active: {
        backgroundColor: Colors.secondary + '20',
        color: Colors.secondary,
        fontWeight: 500
      }
    });
  
    return (
      <nav style={styles.nav}>
        <button 
          style={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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