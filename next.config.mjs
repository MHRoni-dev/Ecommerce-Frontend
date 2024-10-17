/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {hostname : "placehold.co"},
            {hostname : "fakestoreapi.com"}
        ]
    }
};

export default nextConfig;
