var path = require('path');
module.exports = {
  entry: {
    'content': "./src/content/index.tsx",
    'option': "./src/option/index.tsx",
    'background': "./src/background/index.js",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/src'),
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es5"],
};
