// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    theme: {
      extend: {
        colors: {
          'negro-1': '#111b21',
          'negro-2': '#222e35',
          'color-1': '#267432',
          'color-2':'#1587a0',
          'color-3':'#9c303b',
          'color-4':'#f7bb08',
          'color-5':'#115fd0',
          'blanco': '#ccd1cf',
        },
      },
    },
    purge: ['./src/**/*.{html,js,jsx}'], // Agrega la configuración de purga aquí
  };
  