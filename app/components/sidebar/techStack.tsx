import { Colors, StyleSheet } from "~/utils/StyleSheet";

export function TechStack() {
  const technologies = [
    'React Native',
    'TypeScript',
    'JavaScript',
    'Python',
    'Swift',
    'Ruby',
    'Node.js',
    'FastAPI',
    'Redux',
    'Kibana',
    'Jenkins',
    'GraphQL'
  ];

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Technologies</h3>
      <div style={styles.techGrid}>
        {technologies.map((tech) => (
          <span key={tech} style={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: '1rem',
      borderTop: `1px solid ${Colors.secondary}20`,
    },
    title: {
      color: Colors.secondary,
      fontSize: '1rem',
      fontWeight: 600,
      marginBottom: '1rem'
    },
    techGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    techTag: {
      backgroundColor: Colors.secondary + '10',
      color: Colors.secondary,
      padding: '0.25rem 0.75rem',
      borderRadius: '1rem',
      fontSize: '0.8rem',
      display: 'inline-block'
    }
  });