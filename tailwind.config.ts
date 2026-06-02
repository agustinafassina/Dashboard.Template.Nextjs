import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { themeBrandColors, themeShellColors } from './src/config/theme'

const brandColors = Object.fromEntries(
  Object.entries(themeBrandColors).map(([shade, hex]) => [`brand_${shade}`, hex]),
)

const shellColors = {
  light: themeShellColors.light,
  dark: themeShellColors.dark,
  'dark-elevated': themeShellColors['dark-elevated'],
}

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-gray_200',
    'bg-gray_300',
    'text-gray_400',
    'text-gray_500',
    'bg-black/2',
    'bg-blue_100',
    'bg-blue_200',
    'bg-blue_300',
    'text-blue_400',
    'text-blue_500',
    'bg-brand_100',
    'text-brand_300',
    'text-brand_500',
    'bg-red_50',
    'text-red_200',
    'bg-shell-dark',
    'bg-shell-dark-elevated',
  ],
  theme: {
    extend: {
      colors: {
        black_10: '#1A1818',
        gray_10: '#CDD5DB',
        gray_25: '#F9FAF7',
        gray_50: '#FBFCFA',
        gray_75: '#F5EFF7',
        gray_100: '#FBFBFB',
        gray_150: '#FDFDFC',
        gray_160: '#F2F3ED',
        gray_200: '#ECEDE6',
        gray_300: '#EAEAEA',
        gray_350: '#E5E5E5',
        gray_400: '#C9C9C9',
        gray_500: '#C6C6C6',
        gray_600: '#919191',
        gray_700: '#878787',
        gray_750: '#757575',
        gray_800: '#6D6D6D',
        gray_850: '#5A5A5A',
        gray_900: '#322F35',
        blue_50: '#E2EFFF',
        blue_100: '#E0F7FA',
        blue_200: '#3B7DCC1A',
        blue_300: '#14CBCD1A',
        blue_400: '#14CBCD',
        blue_500: '#3B7DCC',
        blue_600: '#0078D4',
        blue_700: '#0056B3',
        ...brandColors,
        shell: shellColors,
        orange_300: '#F3BC6E4D',
        orange: '#FFA221',
        red_50: '#EE4E241A',
        red_100: '#D13438',
        red_200: '#EE4E24',
        red_300: '#FF91914D',
        red_900: '#FF2121',
        black: '#000000',
        white: '#FFFFFF',
      },
      backgroundImage: {
        linearGradientBlue: 'linear-gradient(200deg, #14CBCD, #3B7DCC)',
      },
      fontSize: {
        'cp-xl': '22px',
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ':root': {
          '--gray_300': theme('colors.gray_300'),
          '--gray_800': theme('colors.gray_800'),
          '--blue_300': '#8DE6E7',
          '--blue_400': theme('colors.blue_400'),
          '--blue_500': theme('colors.blue_500'),
          '--brand_400': theme('colors.brand_400'),
          '--red_400': '#D13438',
          '--white': '#FFFFFF',
          '--purple_400': theme('colors.brand_400'),
        },
        '::-webkit-scrollbar': {
          width: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
          background: theme('colors.brand_300'),
          borderRadius: theme('borderRadius.full'),
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: theme('colors.brand_400'),
        },
        '*': {
          'scrollbar-width': 'thin',
          'scrollbar-color': `${theme('colors.brand_300')} transparent`,
        },
      })
    }),
  ],
}

export default config
