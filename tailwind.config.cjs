module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        tech: '#3FA9F5',
        vision: '#8C4BFF',
        neutro: '#4A4A4A',
        claro: '#F5F5F5'
      },
      boxShadow: {
        glass: '0 4px 16px rgba(0,0,0,0.1)'
      },
      backdropBlur: {
        glass: '12px'
      }
    }
  },
  plugins: [],
}
