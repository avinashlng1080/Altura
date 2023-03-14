/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const nodelibs = require('node-libs-react-native');

nodelibs.crypto = `${__dirname}/crypto.js`;

module.exports = {
  resolver: {
    extraNodeModules: nodelibs,
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
