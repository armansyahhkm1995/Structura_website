// ============================================
// RAB CALCULATOR SERVICE (RUMAH)
// ============================================

// ==========================
// CONSTANT
// ==========================
const BASE_HARGA_RAB = 10000; // Rp/m²

// ==========================
// LUAS FACTOR
// ==========================
function getLuasFactor(luas) {
  if (luas < 100) return 1.3;
  if (luas < 200) return 1.1;
  if (luas < 400) return 1.0;
  return 0.85;
}

// ==========================
// QUALITY FACTOR
// ==========================
function getQualityFactor(kualitas) {
  switch (kualitas) {
    case "Sederhana":
      return 0.85;
    case "Menengah":
      return 1.0;
    case "Premium":
      return 1.3;
    default:
      return 1.0;
  }
}

// ==========================
// LANTAI FACTOR
// ==========================
function getLantaiFactor(lantai) {
  if (lantai === 1) return 1.0;
  if (lantai === 2) return 1.15;
  if (lantai === 3) return 1.3;
  return 1.3; // fallback
}

// ==========================
// LOCATION FACTOR
// ==========================
function getLocationFactor(lokasi) {
  switch (lokasi) {
    case "Kota kecil":
      return 0.9;
    case "Kota sedang":
      return 1.0;
    case "Kota besar":
      return 1.15;
    default:
      return 1.0;
  }
}

// ==========================
// VALIDATION
// ==========================
function validateInput({ luas, lantai, kualitas, lokasi }) {
  if (!luas || luas <= 0) {
    throw new Error("Luas bangunan harus lebih dari 0");
  }

  if (![1, 2, 3].includes(lantai)) {
    throw new Error("Lantai hanya boleh 1, 2, atau 3");
  }

  if (!["Sederhana", "Menengah", "Premium"].includes(kualitas)) {
    throw new Error("Kualitas tidak valid");
  }

  if (!["Kota kecil", "Kota sedang", "Kota besar"].includes(lokasi)) {
    throw new Error("Lokasi tidak valid");
  }
}

// ==========================
// CORE CALCULATION
// ==========================
function hitungRAB(input) {
  validateInput(input);

  const { luas, lantai, kualitas, lokasi } = input;

  const luasFactor = getLuasFactor(luas);
  const qualityFactor = getQualityFactor(kualitas);
  const lantaiFactor = getLantaiFactor(lantai);
  const locationFactor = getLocationFactor(lokasi);

  const baseCost = luas * BASE_HARGA_RAB;

  let total =
    baseCost * luasFactor * qualityFactor * lantaiFactor * locationFactor;

  // ==========================
  // OPTIONAL ADJUSTMENTS
  // ==========================

  // Proyek kecil (inefficient)
  if (luas < 50) {
    total *= 1.1;
  }

  // Proyek besar (efficiency)
  if (luas > 300) {
    total *= 0.95;
  }

  return {
    total,
    breakdown: {
      baseCost,
      luasFactor,
      qualityFactor,
      lantaiFactor,
      locationFactor,
    },
  };
}

// ==========================
// RANGE OUTPUT
// ==========================
function getRange(total) {
  return {
    low: Math.round(total * 0.85),
    high: Math.round(total * 1.2),
  };
}

// ==========================
// FORMAT RUPIAH
// ==========================
function formatRupiah(number) {
  return "Rp " + number.toLocaleString("id-ID");
}

// ==========================
// MAIN FUNCTION (PUBLIC)
// ==========================
function calculateRAB(input) {
  const result = hitungRAB(input);
  const range = getRange(result.total);

  return {
    estimasi: {
      low: range.low,
      high: range.high,
      formatted: {
        low: formatRupiah(range.low),
        high: formatRupiah(range.high),
      },
    },
    detail: {
      total: Math.round(result.total),
      formattedTotal: formatRupiah(result.total),
      breakdown: result.breakdown,
    },
    meta: {
      akurasi: "60-70%",
      note: [
        "Estimasi berdasarkan data rata-rata nasional",
        "Belum termasuk desain arsitektur & struktur",
        "Belum termasuk survey tanah",
        "Harga dapat berubah tergantung spesifikasi detail",
      ],
    },
  };
}

// ==========================
// EXPORT
// ==========================
export { calculateRAB };
