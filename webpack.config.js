var path = require('path');
module.exports = {
  entry: {
    'content/script': "./src/content/index.tsx",
    'option/script': "./src/option/index.tsx",
    'background/script': "./src/background/index.js",
  },
  output: {
    path: __dirname,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
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
