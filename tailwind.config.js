module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "light-theme-colorbody": "var(--light-theme-colorbody)",
        "light-theme-colordanger": "var(--light-theme-colordanger)",
        "light-theme-colorgrey-2": "var(--light-theme-colorgrey-2)",
        "light-theme-colorgrey-6": "var(--light-theme-colorgrey-6)",
        "light-theme-colorlight": "var(--light-theme-colorlight)",
        "light-theme-colorsuccess": "var(--light-theme-colorsuccess)",
        "light-theme-colorwhite": "var(--light-theme-colorwhite)",
        "theme-colordanger": "var(--theme-colordanger)",
        "theme-colordark": "var(--theme-colordark)",
        "theme-colorgrey-2": "var(--theme-colorgrey-2)",
        "theme-colorgrey-3": "var(--theme-colorgrey-3)",
        "theme-colorgrey-4": "var(--theme-colorgrey-4)",
        "theme-colorgrey-5": "var(--theme-colorgrey-5)",
        "theme-colorgrey-body": "var(--theme-colorgrey-body)",
        "theme-colorinfo": "var(--theme-colorinfo)",
        "theme-colormenu": "var(--theme-colormenu)",
        "theme-colorprimary": "var(--theme-colorprimary)",
        "theme-colorquantinery": "var(--theme-colorquantinery)",
        "theme-colorsuccess": "var(--theme-colorsuccess)",
        "theme-colortertiary": "var(--theme-colortertiary)",
        "theme-colorwarning": "var(--theme-colorwarning)",
        "theme-colorwhite": "var(--theme-colorwhite)",
        transparencydanger: "var(--transparencydanger)",
        transparencyprimary: "var(--transparencyprimary)",
        transparencyquantinery: "var(--transparencyquantinery)",
        transparencysuccess: "var(--transparencysuccess)",
        "transparent-color-danger": "var(--transparent-color-danger)",
        "transparent-color-success": "var(--transparent-color-success)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-paragraph": "var(--body-paragraph-font-family)",
        "body-paragraph-lead": "var(--body-paragraph-lead-font-family)",
        "body-paragraph-small": "var(--body-paragraph-small-font-family)",
        "heading-heading-1": "var(--heading-heading-1-font-family)",
        "heading-heading-3": "var(--heading-heading-3-font-family)",
        "heading-heading-4": "var(--heading-heading-4-font-family)",
        "heading-heading-5": "var(--heading-heading-5-font-family)",
        "heading-heading-6": "var(--heading-heading-6-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "shadow-01": "var(--shadow-01)",
        "shadow-02": "var(--shadow-02)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
