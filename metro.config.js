const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = withNativeWind( 
  async ()=> {
    const config = await getDefaultConfig(__dirname);

    config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
    config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
    config.resolver.sourceExts.push("svg");

    return config
  }, 
  { input: "./styles/global.css" });