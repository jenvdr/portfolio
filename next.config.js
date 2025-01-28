/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
        {
            source: '/projects',
            destination: '/',
            permanent: true,
        },
        ]
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        });
        return config;
      },
};
