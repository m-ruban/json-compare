module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'entry',
                corejs: '3.1.3',
                exclude: [
                    'es.weak-map',
                    'es.weak-set',
                    'es.array-buffer.*',
                    'es.data-view',
                    'es.typed-array.*',
                    'es.reflect.*',
                ],
            },
        ],
        '@babel/preset-react',
    ],
    plugins: ['@babel/plugin-proposal-class-properties'],
    env: {
        test: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: ['@babel/plugin-proposal-class-properties'],
        },
    },
};
