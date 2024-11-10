/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'], // Ubah default font sans menjadi Poppins
            },
        },
    },
    plugins: [],
}
