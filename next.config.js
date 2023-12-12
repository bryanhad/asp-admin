/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["@prisma/client", "bcrypt"], //we specify this cuz WE DO NOT WANT THESE LIBRARIES TO BE ADDED TO OUR CLIENT BUNDLE! these can only run on the server!
    },
    images: {
        remotePatterns: [{ protocol: "https", hostname: "utfs.io" }],
    },
}

module.exports = nextConfig
