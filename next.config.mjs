/** @type {import('next').NextConfig} */
const nextConfig = {
	publicRuntimeConfig: {
		favicon: './public/favicon.svg'
	},
	serverRuntimeConfig: {
		images: {
			domains: ['*'],
			formats: ['image/webp']
		}
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
				port: '',
				pathname: '/**'
			}
		]
	}
}

export default nextConfig
