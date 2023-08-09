/* eslint-env node */

module.exports = {
  // 指定根，不在继续向上校验
  root: true,

  env: { browser: true, es2020: true },
  plugins: ['react-refresh', '@typescript-eslint', 'html'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  //忽略的文件，可以写在eslintignore中
  // "ignorePatterns": [ "*.html" ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  rules: {
    "max-len": ["error", { "code": 300 }], //单行最大长度
    "react/react-in-jsx-scope": 0,//使用JSX时必须引入 React
    "react/jsx-one-expression-per-line": 0,//每个JSX元素单独一行

    // 无障碍配置
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-noninteractive-tabindex": 0,

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
}
