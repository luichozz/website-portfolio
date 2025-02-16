import { StyleSheet, Colors, typography } from "~/utils/StyleSheet";
import { useEffect, useState } from "react";
export function ExperienceSection() {
    const [selectedCompany, setSelectedCompany] = useState('bestbuy');
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const companies = [
    {
      id: 'bestbuy',
      name: 'Best Buy',
      logo: '/bestbuylogo.jpg',
      experiences: [
        {
          role: 'Associate Software Engineer',
          period: 'May 2024 - Present',
          location: 'Richfield, Minnesota, United States · Hybrid',
          description: 'As an Associate Software Engineer at Best Buy, I am responsible for developing and maintaining the companys mobile iOS applications, with a focus on enhancing the user interface (UI) and user experience (UX) design. Leveraging React Native and TypeScript, I collaborate closely with cross-functional teams to build robust and intuitive mobile solutions that align with Best Buys strategic goals and customer needs.',
          technologies: 'React Native, TypeScript, JavaScript, Mobile Technology, Technical Documentation'
        },
        {
          role: 'Software Engineer (Internship)',
          period: 'Jun 2023 - Aug 2023',
          location: 'Richfield, Minnesota, United States · Hybrid',
          description: 'During my internship with the Engagement Team, I enhanced and optimized Best Buys Consumer App and Solution Sidekick App using React Native and TypeScript. Created intuitive UI components, worked with APIs, and collaborated using Agile methodologies with tools like Jira, GitHub, and Xcode.',
          technologies: 'React Native, TypeScript, Objective-C, Swift, Ruby, APIs, Agile'
        },
      ]
    },
    {
      id: 'hiller',
      name: 'Hiller Measurements',
      logo: '/hillerlogo.jpg',
      experiences: [
        {
          role: 'Software Engineer (Internship)',
          period: 'Feb 2024 - May 2024',
          location: 'El Paso, Texas, United States · On-site',
          description: 'As a Software Engineer at Hiller Measurements, I specialized in optimizing and refactoring existing codebases while also developing new components for their web-based application. Leveraging technologies such as React, Typescript, Node.js, Python, and FastAPI, I focus on enhancing performance and maintainability. Additionally, I designed and implemented APIs using FastAPI to meet project requirements, ensuring seamless communication between frontend and backend systems.',
          technologies: 'React, TypeScript, Node.js, Python, FastAPI'
        }
      ]
    }
  ];

  // Fixed useEffect return type
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(styleElement);

    // Proper cleanup function
    return () => {
      if (styleElement && document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  const selectedExperience = companies.find(company => company.id === selectedCompany);

      return (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>
          <div style={styles.companyNav}>
            {companies.map((company) => (
              <img
                key={company.id}
                src={company.logo}
                alt={`${company.name} logo`}
                style={{
                  ...styles.companyLogo,
                  ...(selectedCompany === company.id && styles.companyLogoActive),
                  ...(hoveredLogo === company.id && styles.companyLogoHover)
                }}
                onClick={() => setSelectedCompany(company.id)}
                onMouseEnter={() => setHoveredLogo(company.id)}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            ))}
          </div>
          {selectedExperience && (
  <div style={styles.experience}>
    <h3 style={styles.company}>{selectedExperience.name}</h3>
    {selectedExperience.experiences.map((exp, index) => (
      <div key={index} style={styles.experienceItem}>
        <h4 style={styles.role}>{exp.role}</h4>
        <p style={styles.period}>{exp.period}</p>
        <p style={styles.location}>{exp.location}</p>
        <p style={styles.description}>{exp.description}</p>
        <p style={styles.technologies}>
          <span style={styles.techLabel}>Technologies: </span>
          {exp.technologies}
        </p>
      </div>
    ))}
  </div>
          )}
        </div>
      );
  }

  const styles = StyleSheet.create({
    section: {
      padding: '1rem 0',
      maxWidth: '1200px',
      marginLeft: '1%',
      '@media (max-width: 767px)': {
        marginLeft: '5%',
      }
    },
    companyNav: {
        display: 'flex',
        gap: '2rem',
        marginBottom: '3rem',
        alignItems: 'center',
        overflowX: 'auto',
        padding: '1rem 0'
      },
      companyLogo: {
        width: '80px',
        height: '80px',
        objectFit: 'contain',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        opacity: 0.7,
        filter: 'grayscale(100%)',
        padding: '0.5rem'
      },
      companyLogoActive: {
        width: '90px',
        height: '90px',
        opacity: 1,
        filter: 'grayscale(0%)'
      },
      companyLogoHover: {
        transform: 'scale(1.1)',
        opacity: 1,
        filter: 'grayscale(0%)'
      },
    sectionTitle: {  // Added this style
        fontSize: '1.5rem',
        fontWeight: 700,
        color: Colors.secondary,
        marginBottom: '2rem',
        fontFamily: typography.primary
      },
    timeline: {
      position: 'relative',
      borderLeft: `2px solid ${Colors.secondary}`,
      paddingLeft: '2rem'
    },
    timelineItem: {
      marginBottom: '2rem',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: '-2.4rem',
        top: '0.5rem',
        width: '0.8rem',
        height: '0.8rem',
        borderRadius: '50%',
        backgroundColor: Colors.secondary
      }
    },
    experience: {
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeIn 0.5s ease forwards'
      },
    company: {
      fontSize: '1.4rem',
      fontWeight: 700,
      color: Colors.primary,
    },
    role: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: Colors.secondary,
      marginBottom: '1rem'
    },
    period: {
      color: Colors.text.secondary,
      fontSize: '1rem',
      fontStyle: 'italic',
      marginBottom: '1rem'
    },
    description: {
      color: Colors.text.primary,
      fontSize: '1rem',
      lineHeight: '1.6',
      '@media (max-width: 767px)': {
        fontSize: '0.9rem'
      }
    },
    experienceItem: {
        marginBottom: '2rem',
        padding: '1rem',
        borderLeft: `3px solid ${Colors.secondary}`,
        backgroundColor: 'rgba(0,0,0,0.02)',
        borderRadius: '0 0.5rem 0.5rem 0'
      },
      location: {
        color: Colors.text.secondary,
        fontSize: '0.9rem',
        marginBottom: '1rem'
      },
      techLabel: {
        color: Colors.secondary,
        fontWeight: 600
      },
      technologies: {
        fontSize: '0.9rem',
        marginTop: '1rem',
        color: Colors.text.primary
      }
  });