import type { Config } from 'tailwindcss';
// import { colors }  from './src/presentation/design/tokens/colors'; // Comment out
// import { spacing } from './src/presentation/design/tokens/spacing'; // Comment out

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // colors, // Comment out or remove
      // spacing, // Comment out or remove
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;