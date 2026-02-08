const config = {
  plugins: {
    "@tailwindcss/postcss": {
      content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
      darkMode: "class",
      theme: {
        extend: {},
      },
      plugins: [],
    },
  },
};

export default config;
