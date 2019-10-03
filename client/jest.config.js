module.exports = {
    resetModules: true,
    testURL: 'http://localhost',
    moduleFileExtensions: ['js', 'json', 'jsx', 'css'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
    transform: {
        '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/tests/fileMock.js',
        '\\.(css|less)$': '<rootDir>/src/tests/styleMock.js',
    },
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/coverage/**'],
    coverageDirectory: './coverage',
    coverageReporters: ['json'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
