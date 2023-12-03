/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd", "@ant-design", "rc-pagination", "rc-picker", "rc-util"],
};

module.exports = nextConfig;
