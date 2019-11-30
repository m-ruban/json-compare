module.exports = {
    bail: 1,
    resetModules: true,
    testURL: 'http://localhost',
    moduleFileExtensions: ['js', 'json', 'jsx', 'css', 'ts', 'tsx'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/tests/fileMock.js',
        '\\.(css|less)$': '<rootDir>/src/tests/styleMock.js',
        '^components(.*)$': '<rootDir>/src/components$1',
        '^constants(.*)$': '<rootDir>/src/constants$1',
        '^hoc(.*)$': '<rootDir>/src/hoc$1',
        '^store(.*)$': '<rootDir>/src/store$1',
        '^modules(.*)$': '<rootDir>/src/modules$1',
    },
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/coverage/**'],
    coverageDirectory: './coverage',
    coverageReporters: ['json'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
