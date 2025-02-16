import React from "react";
import { StyleSheet, Colors, keyframes, typography } from "../../utils/StyleSheet";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function Welcome() {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `${keyframes.slideUp} ${keyframes.slideOut}`;
    document.head.appendChild(style);

    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 500);
    }, 4500);

    return () => {
      document.head.removeChild(style);
      clearTimeout(timer);
    };
  }, [navigate]);
  
  return (
    <main style={styles.main}>
      <div style={{
        ...styles.container,
        ...(isTransitioning ? styles.exitAnimation : {})
      }}>
        <h1 style={styles.title}>
          Welcome to my <span style={styles.highlight}>Portfolio</span>
        </h1>
        <p style={styles.subtitle}>
          Exploring the intersection of design and development
        </p>
      </div>
    </main>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
    width: '100vw',
    overflow: 'hidden',
    position: 'fixed', 
    top: 0,
    left: 0,
    backgroundColor: Colors.background
  },
  container: {
    maxWidth: '800px',
    width: '100%',
    opacity: 0,  // Start invisible
    animation: 'slideUp 1s ease-out forwards',  
    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
      opacity: 1
    }
  },
  title: {
    fontSize: '2.5rem',
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: '1rem'
  },
  subtitle: {
    color: Colors.text.secondary,
    fontSize: '1.25rem',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  highlight: {
    color: Colors.secondary
  },
  exitAnimation: {
    animation: 'slideOut 0.5s ease-out forwards'
  }
});