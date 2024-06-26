import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        HomeHeaderBg: "url('/home-header-background.svg')",
        HomeHeaderBgTablet: "url('/home-header-background-tablet.svg')",
        HomeHeaderBgMobile: "url('/home-header-background-mobile.svg')",
        HomeProductDesktopProps: "url('/home-product-props-desktop.svg')",
        HomeProductTabletProps: "url('/home-product-props-tablet.svg')",
        HomeProductMobileProps: "url('/home-product-props-mobile.svg')",
        ZX7SpeakerBgDesktop: "url('/zx7-speaker-background-desktop.svg')",
        ZX7SpeakerBgTablet: "url('/zx7-speaker-background-tablet.svg')",
        ZX7SpeakerBgMobile: "url('/zx7-speaker-background-mobile.svg')",
        YX1EarphonesHero: "url('/yx1-earphones-hero.svg')",
        YX1EarphonesHeroTablet: "url('/yx1-earphones-hero-tablet.svg')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          copper: "#D87D4A",
          apricot: "#FBAF85",
          lightGray: "#FAFAFA",
          whiteSmoke: "#F1F1F1",
          darkCharcoal: "#101010",
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
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
