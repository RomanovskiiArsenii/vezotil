/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: process.env.NEXT_DIST_DIR || '.next',
    output: 'export', // ← ключ для статического экспорта
    images: { unoptimized: true }, // если используешь <Image/>
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: false },
    trailingSlash: true,
};

module.exports = nextConfig;
