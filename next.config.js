/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexel.com"
            }
        ]
    }
}
  
// set the path of pexel website to use photos url in next js
module.exports = nextConfig
