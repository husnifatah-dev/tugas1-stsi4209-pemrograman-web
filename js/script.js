document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Logika Login ---
    const formLogin = document.getElementById('formLogin');
    
    if (formLogin) {
        formLogin.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const emailInput = document.getElementById('email').value;
            const passwordInput = document.getElementById('password').value;
            
            const userValid = dataPengguna.find(
                user => user.email === emailInput && user.password === passwordInput
            );
            
            if (userValid) {
                window.location.href = "dashboard.html";
            } else {
                alert("email/password yang anda masukkan salah");
            }
        });
    }

    // --- 2. Logika Modal Box ---
    const modalLupaPassword = document.getElementById('modalLupaPassword');
    const modalDaftar = document.getElementById('modalDaftar');
    const btnLupaPassword = document.getElementById('btnLupaPassword');
    const btnDaftar = document.getElementById('btnDaftar');
    const closeLupaPassword = document.getElementById('closeLupaPassword');
    const closeDaftar = document.getElementById('closeDaftar');

    if(btnLupaPassword) btnLupaPassword.onclick = () => modalLupaPassword.style.display = "flex";
    if(btnDaftar) btnDaftar.onclick = () => modalDaftar.style.display = "flex";

    if(closeLupaPassword) closeLupaPassword.onclick = () => modalLupaPassword.style.display = "none";
    if(closeDaftar) closeDaftar.onclick = () => modalDaftar.style.display = "none";

    window.onclick = function(event) {
        if (event.target === modalLupaPassword) {
            modalLupaPassword.style.display = "none";
        }
        if (event.target === modalDaftar) {
            modalDaftar.style.display = "none";
        }
    }

    // --- 3. Logika Sapaan Waktu (Dashboard) ---
    const greetingElement = document.getElementById('greetingMessage');
    
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greeting = "";
        
        if (currentHour >= 5 && currentHour < 11) {
            greeting = "Selamat pagi";
        } else if (currentHour >= 11 && currentHour < 15) {
            greeting = "Selamat siang";
        } else if (currentHour >= 15 && currentHour < 18) {
            greeting = "Selamat sore";
        } else {
            greeting = "Selamat malam";
        }
        
        greetingElement.textContent = greeting;
    }

    const katalogDashboard = document.getElementById('katalogDashboard');
    
    if (katalogDashboard) {
        dataBahanAjar.forEach(function(buku) {
            const card = document.createElement('div');
            card.className = 'katalog-card';
            
            card.innerHTML = `
                <img src="${buku.cover}" alt="Cover ${buku.namaBarang}">
                <h5>${buku.namaBarang}</h5>
                <p>Sisa Stok: ${buku.stok}</p>
            `;
            
            katalogDashboard.appendChild(card);
        });
    }

    // --- 4. Logika Tracking Pengiriman ---
    const btnCariDO = document.getElementById('btnCariDO');
    const noDOInput = document.getElementById('noDO');
    const trackingResult = document.getElementById('trackingResult');

    if (btnCariDO && trackingResult) {
        btnCariDO.addEventListener('click', function() {
            const noDO = noDOInput.value.trim();
            
            if (noDO === "") {
                alert("Silakan masukkan Nomor DO/Billing terlebih dahulu!");
                return;
            }

            const dataPaket = dataTracking[noDO];

            if (dataPaket) {
                let htmlContent = `
                    <div class="tracking-header">
                        <h3>${dataPaket.nama}</h3>
                        <p>No. DO: ${dataPaket.nomorDO}</p>
                        <div class="tracking-info">
                            <div>
                                <p><strong>Status:</strong> ${dataPaket.status}</p>
                                <p><strong>Ekspedisi:</strong> ${dataPaket.ekspedisi}</p>
                                <p><strong>Kode Paket:</strong> ${dataPaket.paket}</p>
                            </div>
                            <div style="text-align: right;">
                                <p><strong>Tanggal Kirim:</strong> ${dataPaket.tanggalKirim}</p>
                                <p><strong>Total Pembayaran:</strong> ${dataPaket.total}</p>
                            </div>
                        </div>
                    </div>
                    <h4 style="margin-bottom: 15px;">Perjalanan Paket</h4>
                    <ul class="timeline">
                `;

                dataPaket.perjalanan.forEach(function(item) {
                    htmlContent += `
                        <li class="timeline-item">
                            <div class="timeline-time">${item.waktu}</div>
                            <div class="timeline-desc">${item.keterangan}</div>
                        </li>
                    `;
                });

                htmlContent += `</ul>`; 
                
                trackingResult.innerHTML = htmlContent;
                trackingResult.style.display = "block"; 
                
            } else {
                alert("Data pengiriman dengan Nomor DO tersebut tidak ditemukan.");
                trackingResult.style.display = "none";
            }
        });
    }

    // --- 5. Logika Informasi Stok Bahan Ajar ---
    const tabelBodyStok = document.getElementById('tabelBodyStok');
    const formTambahStok = document.getElementById('formTambahStok');

    if (tabelBodyStok) {
        
        function tambahBarisTabel(data) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${data.kodeLokasi}</td>
                <td>${data.kodeBarang}</td>
                <td>${data.namaBarang}</td>
                <td>${data.jenisBarang}</td>
                <td>${data.edisi}</td>
                <td><strong>${data.stok}</strong></td>
            `;
            tabelBodyStok.appendChild(tr);
        }

        dataBahanAjar.forEach(function(item) {
            tambahBarisTabel(item);
        });

        if (formTambahStok) {
            formTambahStok.addEventListener('submit', function(event) {
                event.preventDefault(); 

                const dataBaru = {
                    kodeLokasi: document.getElementById('inputLokasi').value,
                    kodeBarang: document.getElementById('inputKode').value,
                    namaBarang: document.getElementById('inputNama').value,
                    jenisBarang: document.getElementById('inputJenis').value,
                    edisi: document.getElementById('inputEdisi').value,
                    stok: document.getElementById('inputStok').value
                };

                tambahBarisTabel(dataBaru);

                alert("Berhasil! Data stok bahan ajar baru telah ditambahkan ke dalam tabel.");

                formTambahStok.reset();
            });
        }
    }
});