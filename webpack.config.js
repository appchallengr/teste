const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const cwd = process.cwd();

  /**
   * Create webpack aliases
   */

   
  const getEnvName = (env) => {
    console.log('env', env)
    if (env.local) return 'local';
    if (env.development) return 'development';
    if (env.production) return 'production';
    return 'uat';
  };

module.exports =(env)=>
{

  return {
    mode: 'production',
    entry: ['./src/index'],
    module: {
      rules:[
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
        },
        {
          // CSS Loader
          test: /\.css$/,
          use: [
            
            { loader: 'css-loader' },
          ],
        },
        

      ],
    },
    output: {
      path: path.resolve(__dirname,`build_${getEnvName(env)}`),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: 'public/index.html',
          inject: true,
        })
      ],
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
      alias: {
       
      },
    },
    
    devtool: 'cheap-module-source-map',
    devServer: {
      open: true,
  
      hot: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    performance: {
      hints: false,
    },
  };

}
