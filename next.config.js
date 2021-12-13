/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    basePath: "/blog",
    assetPrefix: "/blog",
    images: {
        loader: 'akamai',
        path: '',
    },
}

module.exports = nextConfig