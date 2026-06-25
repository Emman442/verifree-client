import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push({
      '@solana/kit': 'commonjs @solana/kit',
      '@solana-program/memo': 'commonjs @solana-program/memo',
      '@solana-program/system': 'commonjs @solana-program/system',
      '@solana-program/token': 'commonjs @solana-program/token',
    });
    return config;
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
