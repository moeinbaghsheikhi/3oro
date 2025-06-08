
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
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
        hostname: 'ns1.omigo.ir',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.digixem360.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.wuerth-phoenix.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kavak.ir',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kkvision.de',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'taskulu.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
