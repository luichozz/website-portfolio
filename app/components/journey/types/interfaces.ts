// journey/types/interfaces.ts
export interface CharacterProps {
    type: 'education' | 'work';
    isHovered: boolean;
    position: [number, number, number];
    onClick: () => void;
  }
  
  export interface InfoCardProps {
    position: [number, number, number];
    info: {
      title: string;
      description: string;
      period: string;
    };
    visible: boolean;
  }
  
  export interface JourneyPoint {
    position: [number, number, number];
    info: {
      title: string;
      description: string;
      period: string;
    };
  }