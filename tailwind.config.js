/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#FBC495",
                    200: "#FDA855",
                },
                secondary: {
                    100: "#BDD6D0",
                    200: "#29C5E6",
                    300: "#0180AB",
                },
            },
            fontFamily: {
                body: ["Rubik"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-scrollbar"),
        require("@tailwindcss/line-clamp"),
        {
            "postcss-import": {},
            "tailwindcss/nesting": "postcss-nesting",
            tailwindcss: {},
            autoprefixer: {},
        },
    ],
};
