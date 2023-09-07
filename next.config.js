const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	reactStrictMode: true,
	webpack5: false,
	assetPrefix: isProd ? 'https://lyfngo.com/' : '',
	images: {
		domains: ['sit.rigelsoft.com', 'uat.rigelsoft.com', 'flagcdn.com', 'ik.imagekit.io', 'demo.lyfngo.com', 'services.lyfngo.com'],
		minimumCacheTTL: 604800,
	},
}
