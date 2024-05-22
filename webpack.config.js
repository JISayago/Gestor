// webpack.config.js

const path = require('path');

module.exports = {
    // Configuración de entrada y salida...
    entry: './src/css/input.css', // Establece el archivo principal de estilos como entrada
    
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'output.css', // Especifica el archivo de salida de Webpack
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('tailwindcss'),
                                    require('autoprefixer'),
                                    // Otros plugins de PostCSS que puedas necesitar...
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
};
