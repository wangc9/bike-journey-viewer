module.exports = {
  env: {
    browser: true,
    node: true,
    es2016: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
  },
};
