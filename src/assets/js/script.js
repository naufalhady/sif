// Akun dummy untuk validasi login
const dummyAccounts = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'admin@example.com', password: 'admin123' },
];

// Fungsi login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const user = dummyAccounts.find(
        (account) => account.email === email && account.password === password
    );

    if (user) {
        errorMessage.textContent = '';
        window.location.href = 'home.html'; // Ganti dengan halaman tujuan
    } else {
        errorMessage.textContent = 'Email atau password salah. Coba lagi.';
    }
}
