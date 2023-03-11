module.exports = {
  root: true,
  plugins: ['import'],
  extends: '@react-native-community',
  rules: {
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: ['type'],
      },
    ],
  },
};
