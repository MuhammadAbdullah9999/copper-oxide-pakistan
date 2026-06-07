/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/products/copper-oxide',
        destination: '/copper-oxide',
        permanent: true,
      },
      {
        source: '/products/silver-nitrate',
        destination: '/silver-nitrate',
        permanent: true,
      },
      {
        source: '/products/copper-sulphate',
        destination: '/copper-sulphate',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
