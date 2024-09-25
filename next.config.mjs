import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.resolve('./styles')],
  },
  // other Next.js configurations
};

export default nextConfig;
