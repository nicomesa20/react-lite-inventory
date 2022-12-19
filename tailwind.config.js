module.exports = {
  mode: 'jit',
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
