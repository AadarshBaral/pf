module.exports = {
  content: ["*"],
  theme: {
    extend: {
     dropShadow :{  
       '5xl': '10px 10px 10px black',
     }
    },
  },
  plugins: [
    require("tailwindcss-hyphens")
  ],
}
