export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:  "#071a24",   // top bar background
          blue:  "#12B7F5",   // accent (logo blue)
          gold:  "#d89200",   // CTA like reference
          white: "#ffffff",
          ink:   "#0b1c25",   // dark text
          mist:  "#f5fbff"    // very light bluish background for main bar
        }
      },
      boxShadow: {
        header: "0 2px 14px rgba(0,0,0,.08)"
      },
      borderRadius: {
        pill: "9999px"
      }
    }
  },
  plugins: [],
}
