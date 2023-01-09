const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			//! Xampp: 80
			//! NodeJs: 3001
			//! change also in package.json
			target: 'http://localhost:80',
			changeOrigin: true,
		})
	)
}

//~ https://www.npmjs.com/package/http-proxy-middleware
