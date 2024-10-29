/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './templates/**/*.html',
        './**/templates/**/*.html', // if using app-specific templates
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
