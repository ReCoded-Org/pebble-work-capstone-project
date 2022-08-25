/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
    i18n,
    eslint: {
        dirs: ["src"],
    },

    reactStrictMode: true,

    // Uncoment to add domain whitelist
    images: {
<<<<<<< HEAD
      domains: [
        'res.cloudinary.com',
        'picsum.photos'
      ],
=======
        domains: ["storage.googleapis.com", "images.unsplash.com"],
>>>>>>> develop
    },

    // SVGR
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        typescript: true,
                        icon: true,
                    },
                },
            ],
        });

        return config;
    },
};
