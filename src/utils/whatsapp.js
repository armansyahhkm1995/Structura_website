const whatsappMessage = `Halo Structura,

Saya ingin konsultasi terkait rencana proyek saya. Berikut informasi awal proyek saya:

1. Jenis proyek:
(Rumah tinggal / Ruko / Café / dll)

2. Lokasi proyek:
(Kota / area)

3. Luas bangunan:
(± berapa m²)

4. Status proyek saat ini:
(Belum ada desain / sudah ada denah / sudah ada gambar lengkap)

5. Rencana jumlah lantai:
(1 lantai / 2 lantai / dll)

6. Target kualitas bangunan:
(Basic / Standard / Premium)

7. Estimasi waktu pembangunan:
(Jika ada)

8. Apakah sudah memiliki kontraktor?
(Belum / sudah)

9. Tujuan utama konsultasi:
(Mengetahui estimasi biaya / kontrol biaya / evaluasi / dll)

Saya juga siap menyediakan data tambahan jika diperlukan.

Terima kasih.`;

const encodedMessage = encodeURIComponent(whatsappMessage);
const phoneNumber = "6285974785490";

export const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
