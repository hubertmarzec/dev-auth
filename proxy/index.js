
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

http://k8s-devalbprofitowi-c4e82f2519-2066819137.eu-west-1.elb.amazonaws.com/apk/swagger-ui/index.htm

app.use('/apk', createProxyMiddleware({ target: 'http://k8s-devalbprofitowi-c4e82f2519-2066819137.eu-west-1.elb.amazonaws.com', changeOrigin: true }));
app.listen(4000);
