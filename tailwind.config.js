module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1676px',
    },
    extend: {
      colors: {
        primary: '#219ebc',
        secondary: '#ffb703',
        accent: {
          DEFAULT: '#023047',
          hover: '#8ecae6d',
        },
        third: '#F4F4F4',
        body: '#F811B6',
        custom: '#023047',
      },
      backgroundImage: {
        hero: "url('./img/herobg.png')",
        herohead: "url('./img/herobghead.png')",
      },
      keyframes: {
        flip: {
          '50%': { transform: 'rotateX(180deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
        },
        wiggle2: {
          '0%, 100%': { transform: 'rotate(3deg)' },
          '50%': { transform: 'rotate(-3deg)' },
        },
        in:{
          '0%': { opacity: '0',
                  transform: 'translateY(200px)' },
          '100%': { opacity: '1' },
        },
        flip:{
          '100%': { transform: 'rotateY(180deg)' },
        }
      },
      animation: {
        'wiggle': 'wiggle 4s linear infinite',
        'flip': 'flip 2s ease-in-out',
        'wiggle2': 'wiggle2 1s linear',
        'in': 'in 2s ease-in',
        'flip': 'flip 1s ease-in',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ]
		
};
