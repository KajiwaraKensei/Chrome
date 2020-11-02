var path = require('path');
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "script.js",
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
