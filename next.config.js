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
};
