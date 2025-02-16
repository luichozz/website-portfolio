// components/Sidebar/index.tsx
import { Colors, StyleSheet } from "~/utils/StyleSheet";
import { Navigation } from "./navigation";
import { TechStack } from "./techStack";
import { useState } from "react";

interface SidebarProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

export function Sidebar({ onSectionChange, currentSection }: SidebarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        },
        mobileHeader: {
          display: 'none',
          '@media (max-width: 768px)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            borderBottom: `1px solid ${Colors.secondary}20`
          }
        },
        menuButton: {
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          color: Colors.text.primary,
          cursor: 'pointer'
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          '@media (max-width: 768px)': {
            display: isMobileMenuOpen ? 'flex' : 'none',
            position: 'absolute',
            top: '60px',
            left: 0,
            width: '100%',
            backgroundColor: Colors.text.light,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '0 0 0.5rem 0.5rem'
          }
        }
      });
    return (
      <aside style={styles.sidebar}>
        <div style={styles.mobileHeader}>
          <span>Menu</span>
          <button 
            style={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div style={styles.content}>
          <Navigation 
            onSectionChange={onSectionChange} 
            currentSection={currentSection}
          />
          <TechStack />
        </div>
      </aside>
    );
}
