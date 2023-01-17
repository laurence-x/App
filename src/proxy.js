const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			//! change also in package.json
			// target: 'http://localhost:80', //~ Xampp
			target: 'http://localhost:3001', //~ Node
			changeOrigin: true,
		})
	)
}

//~ https://www.npmjs.com/package/http-proxy-middleware
