import webpack          from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config           from '../config';
import webpackConfig    from './webpack/development_hot';

const paths = config.get('utils_paths');

const server = new WebpackDevServer(webpack(webpackConfig), {
  contentBase : paths.project(config.get('dir_src')),
  hot    : true,
  quiet  : false,
  noInfo : false,
  lazy   : false,
  stats  : {
    colors : true
  },
  historyApiFallback : true,
  proxy: {
    // 编辑页代理
    "/courses/*/edit_center": {
      target : "http://localhost:3000/"
    },
    "/teacher/desc" : {
      target : "http://localhost:3020/"
    },
    "/courses/*/edit_desc" : {
      target : "http://localhost:3020/"
    },
    "/albums/*/edit_desc" : {
      target : "http://localhost:3020/"
    },
    "/static/seditor/*": {
      target : "http://localhost:3020/"
    },
    "/static/editor/*": {
      target : "http://localhost:3000/"
    },
    "/vendor*": {
      target : "http://localhost:3000/"
    },
    "/app*": {
      target : "http://localhost:3000/"
    },
    // 数据接口proxy
    '/api/*': {
		   target : "http://localhost:8081/",
      secure: false,
      bypass: function(req, res, proxyOptions) {
        req.headers.host = 'localhost';
      }
    }
  }
});

export default server;
