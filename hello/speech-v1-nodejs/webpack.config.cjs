// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    library: 'Adaptation',
    filename: './adaptation.js',
  },
  node: {
    child_process: 'empty',
    fs: 'empty',
    crypto: 'empty',
  },
  resolve: {
    alias: {
      '../../../package.json': path.resolve(__dirname, 'package.json'),
    },
    extensions: ['.js', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /node_modules[\\/]@grpc[\\/]grpc-js/,
        use: 'null-loader'
      },
      {
        test: /node_modules[\\/]grpc/,
        use: 'null-loader'
      },
      {
        test: /node_modules[\\/]retry-request/,
        use: 'null-loader'
      },
      {
        test: /node_modules[\\/]https?-proxy-agent/,
        use: 'null-loader'
      },
      {
        test: /node_modules[\\/]gtoken/,
        use: 'null-loader'
      },
    ],
  },
  mode: 'production',
};
