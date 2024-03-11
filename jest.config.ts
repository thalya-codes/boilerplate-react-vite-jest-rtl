export default {
 preset: 'ts-jest',
 testEnvironment: 'jest-environment-jsdom',
 transform: {
  '^.+\\.tsx?$': 'ts-jest',
  // process `*.tsx` files with `ts-jest`
 },
 moduleNameMapper: {
  '\\.(gif|ttf|eot|png|css|svg)$':
   '<rootDir>/.test/mocks/fileMock.ts',
 },
};
