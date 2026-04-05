// ============================================
// RAB CALCULATOR SERVICE (KOMERSIAL)
// ============================================

// ==========================
// CONSTANT
// ==========================
const BASE_HARGA_RAB_KOMERSIAL = 12000; // Rp/m²

// ==========================
// LUAS FACTOR
// ==========================
function getLuasFactorKomersial(luas) {
  if (luas < 100) return 1.25;
  if (luas < 300) return 1.1;
  if (luas < 600) return 1.0;
  return 0.9;
}

// ==========================
// FUNGSI / JENIS FACTOR
// ==========================
function getFungsiFactor(jenis) {
  switch (jenis) {
    case "gudang":
      return 0.85;
    case "ruko":
      return 1.0;
    case "kantor":
      return 1.1;
    case "klinik":
      return 1.2;
    case "cafe":
      return 1.3;
    case "restoran":
      return 1.45;
    default:
      return 1.0;
  }
}

// ==========================
// LANTAI FACTOR
// ==========================
function getLantaiFactorKomersial(lantai) {
  if (lantai === 1) return 1.0;
  if (lantai === 2) return 1.2;
  if (lantai === 3) return 1.4;
  return 1.4;
}

// ==========================
// LOCATION FACTOR
// ==========================
function getLocationFactorKomersial(lokasi) {
  switch (lokasi) {
    case "Kota kecil":
      return 0.9;
    case "Kota sedang":
      return 1.0;
    case "Kota besar":
      return 1.2;
    default:
      return 1.0;
  }
}

// ==========================
// INTERIOR FACTOR (OPTIONAL)
// ==========================
function getInteriorFactor(level) {
  if (!level) return 1.0;

  switch (level) {
    case "basic":
      return 1.0;
    case "custom":
      return 1.15;
    case "high_end":
      return 1.3;
    default:
      return 1.0;
  }
}

// ==========================
// VALIDATION
// ==========================
function validateInput(input) {
  const { luas, lantai, jenis, lokasi } = input;

  if (!luas || luas <= 0) {
    throw new Error("Luas bangunan harus lebih dari 0");
  }

  if (![1, 2, 3].includes(lantai)) {
    throw new Error("Lantai hanya boleh 1, 2, atau 3");
  }

  const jenisValid = ["gudang", "ruko", "kantor", "klinik", "cafe", "restoran"];

  if (!jenisValid.includes(jenis)) {
    throw new Error("Jenis bangunan tidak valid");
  }

  if (!["Kota kecil", "Kota sedang", "Kota besar"].includes(lokasi)) {
    throw new Error("Lokasi tidak valid");
  }
}

// ==========================
// CORE CALCULATION
// ==========================
function hitungRABKomersial(input) {
  validateInput(input);

  const {
    luas,
    lantai,
    jenis,
    lokasi,
    interiorLevel, // optional
  } = input;

  const luasFactor = getLuasFactorKomersial(luas);
  const fungsiFactor = getFungsiFactor(jenis);
  const lantaiFactor = getLantaiFactorKomersial(lantai);
  const locationFactor = getLocationFactorKomersial(lokasi);
  const interiorFactor = getInteriorFactor(interiorLevel);

  const baseCost = luas * BASE_HARGA_RAB_KOMERSIAL;

  let total =
    baseCost *
    luasFactor *
    fungsiFactor *
    lantaiFactor *
    locationFactor *
    interiorFactor;

  // ==========================
  // OPTIONAL ADJUSTMENTS
  // ==========================

  // Proyek kecil (inefficiency)
  if (luas < 80) {
    total *= 1.1;
  }

  // Proyek besar (efficiency)
  if (luas > 500) {
    total *= 0.95;
  }

  return {
    total,
    breakdown: {
      baseCost,
      luasFactor,
      fungsiFactor,
      lantaiFactor,
      locationFactor,
      interiorFactor,
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
function calculateRABKomersial(input) {
  const result = hitungRABKomersial(input);
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
        "Estimasi berdasarkan kompleksitas fungsi bangunan komersial",
        "Belum termasuk desain arsitektur & engineering detail",
        "Belum termasuk perizinan usaha & utilitas khusus",
        "Proyek F&B (cafe/restoran) biasanya memiliki kompleksitas lebih tinggi",
      ],
    },
  };
}

// ==========================
// EXPORT
// ==========================
export { calculateRABKomersial };
