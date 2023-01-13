/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  projects: [
    {
      displayName: 'unit',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/**/*.spec.ts'],
      transform: { '^.+\\.tsx?$': 'ts-jest' },
    },
    {
      displayName: 'e2e',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/tests/**/*.spec.ts'],
      transform: { '^.+\\.tsx?$': 'ts-jest' },
      setupFilesAfterEnv: ['<rootDir>/test-utils/setup.ts'],
    },
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  // coveragePathIgnorePatterns: ['.*\\.d\\.ts'],
  // coverageDirectory: '<rootDir>/coverage',
};
