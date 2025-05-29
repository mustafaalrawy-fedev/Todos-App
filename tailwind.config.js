export default {
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths to match your project structure
  ],
  theme: {
    extend: {
      // Add custom styles or extend existing ones here
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Ensure 'dark' variant works for background color
    },
  },
  plugins: [],
};
