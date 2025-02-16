export const Colors = {
  // Primary color - The deep blue-grey (264653)
  // Use for main headings, navigation, and important UI elements
  primary: '#264653',

  // Secondary color - The teal (2A9D8F)
  // Use for buttons, links, and interactive elements
  secondary: '#2A9D8F',

  // Background color - A very light version of the blue-grey
  // Creating a custom light background based on primary color
  background: '#F5F7F8',

  // Accent colors
  accent: {
    // The golden yellow (E9C46A)
    // Use for highlights, badges, or special sections
    warm: '#E9C46A',
    
    // The peach (F4A261)
    // Use for hover states, secondary buttons
    light: '#F4A261',
    
    // The coral (E76F51)
    // Use for call-to-action buttons, important alerts
    hot: '#E76F51'
  },

  // Text colors
  text: {
    primary: '#264653',    // Same as primary for dark text
    secondary: '#5C6B73',  // A softer version for body text
    light: '#F5F7F8'      // For text on dark backgrounds
  }
};

export const keyframes = {
  slideUp: `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(50px);
        filter: blur(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
    }
  `,
  slideOut: `
    @keyframes slideOut {
      from {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
      to {
        opacity: 0;
        transform: translateY(-50px);
        filter: blur(10px);
      }
    }
  `
};

export const typography = {
  primary: "'Satoshi', sans-serif"
};

export const StyleSheet = {
  create: <T extends { [key: string]: React.CSSProperties }>(styles: T): T => styles
};