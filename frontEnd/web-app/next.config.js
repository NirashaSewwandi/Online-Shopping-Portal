module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = "inline-source-map";
      config.resolve.fallback = {
        path: require.resolve("path-browserify"),
      };
    }
    return config;
  },
};
