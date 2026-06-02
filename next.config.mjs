const nextConfig = () => {
  const useWebpackFsCacheOnWindows =
    process.env.NEXT_DEV_FS_CACHE === '1'

    return {
    webpack: (config, { dev }) => {

      if (dev && process.platform === 'win32' && !useWebpackFsCacheOnWindows) {
        config.cache = { type: 'memory' }
      }
      return config
    },
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
        },
        {
          protocol: 'https',
          hostname: 's.gravatar.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.auth0.com',
        },
      ],
      domains: ['s.gravatar.com', 'cdn.auth0.com', 'flagcdn.com'],
    },
    output: 'standalone',
  }
}

export default nextConfig
