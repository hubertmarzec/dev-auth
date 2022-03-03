const { createProxyMiddleware } = require('http-proxy-middleware');
const { REACT_APP_API_URL } = process.env;
module.exports = function(app) {
  app.use('/apk', createProxyMiddleware({
    target: 'http://k8s-devalbprofitowi-c4e82f2519-2066819137.eu-west-1.elb.amazonaws.com',
    changeOrigin: true
  }));
};
