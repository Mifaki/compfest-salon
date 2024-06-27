import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontSize: {
        'caption-1': ['14px', 'auto'],
        'caption-2': ['12px', 'auto'],
        'caption-3': ['10px', 'auto'],
        'body-1': ['18px', 'auto'],
        'body-2': ['16px', 'auto'],
        'heading-1': ['48px', 'auto'],
        'heading-2': ['38px', 'auto'],
        'heading-3': ['32px', 'auto'],
        'heading-4': ['28px', 'auto'],
        'heading-5': ['24px', 'auto'],
        'heading-6': ['20px', 'auto'],
        'display-1': ['72px', 'auto'],
        'display-2': ['54px', 'auto'],
      },
      colors: {
        'sea-cream' : '#FAF6F2',
        'sea-brown': '#3B1F0E',
        'sea-gray': "#EBE5DF"
      }
    },
  },
  plugins: [],
} satisfies Config;
