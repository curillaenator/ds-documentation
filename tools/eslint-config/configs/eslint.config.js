module.exports = {
  extends: [require.resolve(`@ecp/eslint-config-pnp`)],
  // Внимание! Желательно в будущем включить нижеследующие правила,
  // затем запустить `yarn eslint ./` и править полученные ошибки
  plugins: ['testing-library', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx', '.md'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        jsxSingleQuote: true,
        semi: true,
        printWidth: 120,
        trailingComma: 'all',
        proseWrap: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'no-underscore-dangle': 'off',
    'react/require-default-props': 'off',
    'no-promise-executor-return': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'react/no-unstable-nested-components': 'off',
    'jsx-a11y/label-has-associated-control': 'off',

    // правила для тестирования
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
