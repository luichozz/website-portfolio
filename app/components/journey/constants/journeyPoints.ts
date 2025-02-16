import { JourneyPoint } from '../types/interfaces';

export const journeyPoints: Record<'education' | 'work', JourneyPoint> = {
  education: {
    position: [-2, -0.7, 0],
    info: {
      title: 'Bachelor of Computer Science',
      description: 'University Of Texas At El Paso\n• Google Tech Exchange 2023\n• SWE intern at Best Buy - Summer 2023\n• SWE intern at Hiller Measurements - Fall 2023 through Spring 2024',
      period: '\n2020 - 2024'
    }
  },
  work: {
    position: [2, -0.7, 0],
    info: {
      title: 'Associate Software Engineer',
      description: 'Best Buy - CRET Team\n• Developing & maintaining React Native mobile app for iOS/Android\n• Creating engaging UI/UX to boost customer interaction\n• Monitoring user engagement via Kibana/Grafana',
      period: '\n\n2024 - Present'
    }
  }
};