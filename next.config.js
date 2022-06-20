/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
