// Для работы на статичной версии
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     distDir: process.env.NEXT_DIST_DIR || '.next',
//     output: 'export', // ← ключ для статического экспорта
//     images: { unoptimized: true }, // если используешь <Image/>
//     eslint: { ignoreDuringBuilds: true },
//     typescript: { ignoreBuildErrors: false },
//     trailingSlash: true,
// };

// module.exports = nextConfig;

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: process.env.NEXT_DIST_DIR || '.next',
    output: process.env.NEXT_OUTPUT_MODE,
    experimental: {
        outputFileTracingRoot: path.join(__dirname, '../'),
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    images: { unoptimized: true },
};

module.exports = nextConfig;
