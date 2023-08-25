/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'snfdnsrbwbcyvisenswl.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/**',
          },
        ],
      },
}

module.exports = nextConfig
