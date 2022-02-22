/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.unsplash.com', 'images.prismic.io'],
	},
	env: {
		repoName: "demo-prismic-clone",
		access_token: "",
	},
	future:
		{
			webpack5: true
		},
	modules: true,
}

module.exports = nextConfig
