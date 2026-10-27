import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/b2bsmith-gh-pages'
  // basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
