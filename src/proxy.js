/* import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			//! change also in package.json
			// target: 'http://127.0.0.1:80', //~ Xampp
			target: 'http://127.0.0.1:3001', //~ Node
			changeOrigin: true,
		})
	)
}

//~ https://www.npmjs.com/package/http-proxy-middleware
 */
export { }
