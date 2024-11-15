import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@assets/(.*)$': '<rootDir>/app/assets/$1',
    '^@styles/(.*)$': '<rootDir>/app/styles/$1',
    '^@components/(.*)$': '<rootDir>/app/components/$1',
    '^@types/(.*)$': '<rootDir>/app/types/$1',
    '^@hooks/(.*)$': '<rootDir>/app/hooks/$1',
    '^@api/(.*)$': '<rootDir>/app/api/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
