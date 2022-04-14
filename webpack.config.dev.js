
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
// module.exports es un objeto donde viven nuestras configuraciones
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath:'/'
  },

  resolve: {
    //Extensiones que vamos a trabajar
    extensions: [".js", ".jsx"],
    alias:{
        '@components': path.resolve(__dirname,'src/components/'),
       '@styles':path.resolve(__dirname,'src/styles/')
    }
  },
mode:'production',
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
      }),

    
      new CleanWebpackPlugin()
  ],

optimization:{
    minimize:true,
    minimizer:[
        new CssMinimizerPlugin(),
        new TerserPlugin()
    ]
}



};
