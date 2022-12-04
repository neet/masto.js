module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
    // '<rootDir>/tests/**/*.spec.ts',
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    // entry point has no functions
    '!src/index.ts',
  ],
  coveragePathIgnorePatterns: ['.*\\.d\\.ts'],
  coverageDirectory: '<rootDir>/coverage',
  setupFilesAfterEnv: ['<rootDir>/test-utils/setup.ts'],
};
