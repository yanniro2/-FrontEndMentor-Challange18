/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "Mobile": { "min": "375px", "max": "600px" },
    },
    colors: {

      // Primary 
      "Red": "hsl(1, 90%, 64%)",
      "Blue": "hsl(219, 85%, 26%)",

      //Neutral
      "White": "hsl(0, 0%, 100%)",
      "Very-light-grayish-blue": "hsl(210, 60%, 98%)",
      "Light-grayish-blue-1": "hsl(211, 68%, 94%)",
      "Light-grayish-blue-2": "hsl(205, 33%, 90%)",
      "Grayish-blue": "hsl(219, 14%, 63%)",
      "Dark-grayish-blue": "hsl(219, 12%, 42%)",
      "Very-dark-blue": "hsl(224, 21%, 14%)",
    },
    fontSize: {
      "ms": "16px",
    },
    fontFamily: {
      "Jakarta": ["Plus Jakarta Sans", "sans-serif"]
    },
    fontWeight: {
      "ms": 500,
      "lg": 800,
    },
    extend: {},
  },
  plugins: [],
}
