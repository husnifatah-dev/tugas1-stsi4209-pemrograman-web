# SITTA UT - Front-End Simulation App

Repositori ini berisi *source code* untuk **Tugas Praktik 1 Mata Kuliah Pemrograman Web (STSI4209)** di Universitas Terbuka. Proyek ini merupakan simulasi antarmuka (*front-end*) dari aplikasi pemesanan bahan ajar SITTA UT.

## Deskripsi Proyek
Proyek ini difokuskan pada penerapan HTML Semantik, desain tata letak CSS, dan manipulasi Document Object Model (DOM) menggunakan Vanilla JavaScript. Proyek ini **tidak menggunakan framework** (seperti Bootstrap/Tailwind) dan **tidak menggunakan back-end/database**, melainkan memanfaatkan objek statis (`data.js`) untuk simulasi pertukaran data secara *real-time*.

## Fitur Utama
1. **Halaman Login (`index.html`)**
   - Validasi email dan password (Alert Box).
   - *Modal Box* interaktif untuk fitur "Lupa Password" dan "Daftar Akun Baru".
2. **Halaman Dashboard (`dashboard.html`)**
   - *Navigation Bar* dengan fitur *dropdown menu* CSS.
   - Sapaan dinamis ("Selamat pagi/siang/sore/malam") berdasarkan waktu lokal *user*.
   - Render dinamis *Card* Katalog Buku Bahan Ajar.
3. **Halaman Tracking Pengiriman (`tracking.html`)**
   - Pencarian resi/Delivery Order (DO).
   - Visualisasi perjalanan paket menggunakan struktur *Timeline* vertikal.
4. **Halaman Informasi Stok (`stok.html`)**
   - Menampilkan data tabel stok secara dinamis dari `data.js`.
   - Form penambahan data stok baru ke dalam baris tabel secara *real-time* tanpa *reload* halaman.

## Teknologi yang Digunakan
* **HTML5:** Struktur semantik (*nav, div, form, table, dll*).
* **CSS3:** Flexbox, Pseudo-classes (`:hover`), Pseudo-elements (`::before`), Custom Layout.
* **JavaScript (ES6):** Vanilla JS, DOM Manipulation (`getElementById`, `createElement`, `appendChild`, `innerHTML`), Array Methods (`find`, `forEach`), Event Listeners.

## Struktur Folder
```text
sitta-praktik/
│
├── index.html           # Halaman Login
├── dashboard.html       # Halaman Dashboard
├── tracking.html        # Halaman Lacak Resi
├── stok.html            # Halaman Tabel Stok
│
├── css/
│   └── style.css        # File styling utama
│
├── js/
│   ├── script.js        # File logika DOM utama
│   └── data.js          # File data dummy/konstanta JSON
│
└── assets/
    └── img/             # Folder aset gambar cover buku