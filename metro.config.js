const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = withNativeWind( 
  async ()=> {
    const config = await getDefaultConfig(__dirname);

    config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
    config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
    config.resolver.sourceExts.push("svg");
    config.resolver.unstable_enablePackageExports = false

    config.resolver.resolveRequest = function packageExportsResolver(context, moduleImport, platform) {
      if (moduleImport === '<package>' || moduleImport.startsWith('<package>/')) {
        return context.resolveRequest(
          {
            ...context,
            unstable_conditionNames: ['browser'],
          },
          moduleImport,
          platform,
        );
      }
      return context.resolveRequest(context, moduleImport, platform);
    };
    
    return config
  }, 
  { input: "./styles/global.css" });