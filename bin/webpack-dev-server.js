require('babel-core/register');

const devServer = require('../build/webpack-dev-server'),
      config    = require('../config');

const port = config.get('webpack_port');
devServer.listen(port, '0.0.0.0', function () {
  console.log('Webpack dev server running at localhost:' + port);
});
