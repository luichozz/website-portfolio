import { Colors, StyleSheet } from "~/utils/StyleSheet";
import { Navigation } from "./navigation";
import { TechStack } from "./techStack";
import { useState, useEffect } from "react";

interface SidebarProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

export function Sidebar({ onSectionChange, currentSection }: SidebarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const styles = StyleSheet.create({
        sidebar: {
          position: 'fixed',
          left: 0,
          top: 0,
          width: '250px',
          height: '100vh',
          backgroundColor: Colors.text.light,
          borderRight: `1px solid ${Colors.secondary}20`,
          display: 'flex',
          flexDirection: 'column',
          zIndex: 100,
          '@media (max-width: 768px)': {
            width: '100%',
            height: isMobileMenuOpen ? '100vh' : 'auto',
            borderRight: 'none',
            borderBottom: `1px solid ${Colors.secondary}20`
          }
        },
        mobileHeader: {
          display: 'none',
          '@media (max-width: 768px)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: Colors.text.light,
            borderBottom: `1px solid ${Colors.secondary}20`,
            position: 'relative',
            zIndex: 101
          }
        },
        menuButton: {
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          color: Colors.text.primary,
          cursor: 'pointer',
          padding: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '1rem',
          '@media (max-width: 768px)': {
            display: isMobileMenuOpen ? 'flex' : 'none',
            position: 'absolute',
            top: '60px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 60px)',
            backgroundColor: Colors.text.light,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'auto',
            padding: '1rem'
          }
        },
        overlay: {
          display: isMobile && isMobileMenuOpen ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 90
        }
    });

    const handleOverlayClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
      <>
        <div style={styles.overlay} onClick={handleOverlayClick} />
        <aside style={styles.sidebar}>
          <div style={styles.mobileHeader}>
            <span>Menu</span>
            <button 
              style={styles.menuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          <div style={styles.content}>
            <Navigation 
              onSectionChange={(section) => {
                onSectionChange(section);
                if (isMobile) {
                  setIsMobileMenuOpen(false);
                }
              }}
              currentSection={currentSection}
            />
            <TechStack />
          </div>
        </aside>
      </>
    );
}