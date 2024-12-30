/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'neon-pink': '#FF3366',
		  'neon-purple': '#B24BF3',
		  'neon-violet': '#9D4EDD',
		  'deep-purple': '#0A0910', // Color más oscuro para el fondo
		  'light-purple': '#2A1B3F',
		},
		animation: {
		  'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
		  'hover-float': 'hover-float 3s ease-in-out infinite',
		  'glow': 'glow 2s ease-in-out infinite alternate',
		  'border-flow': 'border-flow 2s ease infinite',
		},
		keyframes: {
		  'neon-pulse': {
			'0%, 100%': { 
			  textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #B24BF3, 0 0 82px #B24BF3, 0 0 92px #B24BF3, 0 0 102px #B24BF3, 0 0 151px #B24BF3' 
			},
			'50%': { 
			  textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 13px #fff, 0 0 26px #B24BF3, 0 0 45px #B24BF3, 0 0 55px #B24BF3, 0 0 65px #B24BF3, 0 0 85px #B24BF3' 
			}
		  },
		  'hover-float': {
			'0%, 100%': { transform: 'translateY(0)' },
			'50%': { transform: 'translateY(-10px)' }
		  },
		  'glow': {
			'0%': { boxShadow: '0 0 5px #B24BF3, 0 0 10px #B24BF3, 0 0 15px #B24BF3' },
			'100%': { boxShadow: '0 0 20px #B24BF3, 0 0 35px #B24BF3, 0 0 50px #B24BF3' }
		  },
		  'border-flow': {
			'0%': { backgroundPosition: '0% 50%' },
			'50%': { backgroundPosition: '100% 50%' },
			'100%': { backgroundPosition: '0% 50%' }
		  }
		},
		backgroundImage: {
		  'grid-pattern': 'linear-gradient(rgba(178, 75, 243, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(178, 75, 243, 0.1) 1px, transparent 1px)',
		  'gradient-purple': 'linear-gradient(45deg, #B24BF3, #9D4EDD)',
		},
		backgroundSize: {
		  'grid': '20px 20px',
		},
	  },
	},
	plugins: [],
  }