
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
// module.exports es un objeto donde viven nuestras configuraciones
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    //Extensiones que vamos a trabajar
    extensions: [".js", ".jsx"],
  },

  module: {
    //Reglas
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use:[
            {
                loader:'html-loader'

            }
        ]    
      },
      {
          test:/\.(css|scss)$/,
          use:[
            'style-loader',
            'css-loader',
            'sass-loader'
          ]

      }
    ],
  },

  plugins:[
      new HtmlWebpackPlugin({
        template:'./public/index.html',
        filename:'./index.html'
      }),
      new MiniCssExtractPlugin({
          filename:'[name].css'
      })
  ],


/* para crear nuestro servidor para ver cambios al momento */
devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3006
    }
};
