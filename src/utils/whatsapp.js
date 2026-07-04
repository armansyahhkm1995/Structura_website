const whatsappMessage = `Halo Structura 👋

Saya ingin berkonsultasi mengenai rencana pembangunan saya.

Berikut gambaran awal proyek saya:

━━━━━━━━━━━━━━━━━━━━━━

🏠 1. Jenis proyek
(Rumah tinggal / Renovasi / Ruko / Café / Gudang / Kantor / Bangunan lainnya)

✍️ Jawaban:


📍 2. Lokasi proyek
(Kota / Kecamatan)

✍️ Jawaban:


📐 3. Perkiraan luas bangunan
(Jika belum pasti boleh dikira-kira)

✍️ Jawaban:


🏗️ 4. Tahap proyek saat ini
☐ Masih mencari informasi
☐ Sudah memiliki lahan
☐ Sudah memiliki denah
☐ Sudah memiliki gambar desain
☐ Sedang proses pembangunan
☐ Lainnya: ...

✍️ Jawaban:


💰 5. Kisaran anggaran (Opsional)
(Boleh dikosongkan jika belum memiliki gambaran)

✍️ Jawaban:


🎯 6. Apa yang ingin Anda capai?
(Contoh: rumah nyaman untuk keluarga, biaya tetap terkontrol, desain modern, rumah hemat energi, dll.)

✍️ Jawaban:


❓ 7. Apa yang ingin Anda konsultasikan?
☐ Desain Arsitektur
☐ Desain Interior
☐ Perencanaan Struktur
☐ RAB (Rencana Anggaran Biaya)
☐ Dokumen Perizinan
☐ Pendampingan Pembangunan
☐ Renovasi
☐ Lainnya: ...

✍️ Jawaban:


📎 8. Apakah sudah memiliki data pendukung?
(Boleh pilih lebih dari satu)

☐ Foto lokasi
☐ Denah
☐ Gambar desain
☐ SHM / Sertifikat
☐ PBG / IMB
☐ Hasil survei tanah
☐ Belum ada

✍️ Jawaban:

━━━━━━━━━━━━━━━━━━━━━━

Jika diperlukan, saya siap mengirimkan foto lokasi, gambar desain, maupun dokumen pendukung agar diskusi menjadi lebih mudah.

Terima kasih.`;

const encodedMessage = encodeURIComponent(whatsappMessage);
const phoneNumber = "6285974785490";

export const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
