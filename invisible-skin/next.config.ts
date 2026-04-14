import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    // This app lives in a nested directory. Lock Turbopack to the app root
    // so Vercel does not infer the parent package-lock as the workspace root.
    root: process.cwd(),
  },
}

export default nextConfig
