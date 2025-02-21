const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    ...defaultConfig,
    resolver: {
      sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
    },
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
  };
})();
