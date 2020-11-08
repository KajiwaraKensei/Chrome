var path = require('path');
module.exports = {
  entry: {
    'option/script': "./content_src/index.tsx",
    'content/script': "./option_src/index.tsx",
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js",
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
      '~/content': path.resolve(__dirname, '/content_src'),
      '~/option': path.resolve(__dirname, '/option_src'),
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es5"],
};
