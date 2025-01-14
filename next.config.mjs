/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
    domains: ['is1-ssl.mzstatic.com', 'assets.nflxext.com'],
  },

  async rewrites() {
    return [
        {
            source: '/api/itunes/:path*', // Proxy endpoint
            destination: 'https://itunes.apple.com/:path*', // Target iTunes API
        },
    ];
},
  
};


export default nextConfig;
