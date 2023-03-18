/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			padding: {
				servicePadding: '50px 32px 28px'
			},
			boxShadow: {
				serviceShadow: '6px 16px 27px 8px rgba(32, 47, 58, 0.2)'
			},
			translate: {
				swiperNav: '-50%'
			},
			gridTemplateColumns: {
				contactCols: '500px 450px'
			}
		}
	},
	plugins: []
}
