module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/screens': './src/screens',
          '@/navigation': './src/navigation',
          '@/store': './src/store',
          '@/hooks': './src/hooks',
          '@/types': './src/types',
          '@/services': './src/services',
        },
      },
    ],
  ],
};
