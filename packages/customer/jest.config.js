module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: false,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['<rootDir>/node_modules', 'dist'],
  transform: {
    '^.+\\.js$|^.+\\.jsx$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|mp3|ico)$': '<rootDir>/config/jest/mock/file.mock.js',
    '\\.(svg)$': '<rootDir>/config/jest/mock/svg.mock.js',
    '\\.(css|scss)$': '<rootDir>/config/jest/mock/style.mock.js',
  },
};
