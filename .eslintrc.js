module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:security/recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      version: '17.0.1', // React version, default to the latest React stable release
    },
  },
};
