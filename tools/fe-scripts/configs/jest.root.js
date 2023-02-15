const baseJestConfig = require('./jest.base.js');

module.exports = {
  ...baseJestConfig,
  modulePaths: ['<rootDir>'],
  testMatch: ['**/__tests__/*test.(ts|tsx|js)'],
  modulePathIgnorePatterns: ['<rootDir>/\\.storybook', '<rootDir>/assets'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@kit-base|@kit-xyz|@pcbl|@pcbl-ui|@pcbl-ui-v3|@pcbl-ui-v2|@pcbl-ui-v4|@pcbl-widgets|@ckeditor|ckeditor5|lodash-es)/)',
  ],
  transform: {
    '^.+?/(@ckeditor|CKEditor5)/.+?.(svg)$': 'jest-raw-loader',
    ...baseJestConfig.transform,
  },
  moduleNameMapper: {
    ...baseJestConfig.moduleNameMapper,
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
};
