// ============================================
// RAB CALCULATOR SERVICE (INFRASTRUKTUR)
// ============================================

// ==========================
// CONSTANT
// ==========================
const BASE_HARGA_RAB_INFRA = 15000; // Rp per unit dimensi

// ==========================
// TYPE VALIDATION
// ==========================
const INFRA_TYPES = ["jembatan", "jalan", "drainase"];

// ==========================
// JENIS FACTOR (PER TYPE)
// ==========================
function getJenisFactor(type, jenis) {
  const mapping = {
    jembatan: {
      kayu: 0.8,
      beton: 1.0,
      baja: 1.3,
    },
    jalan: {
      tanah: 0.6,
      aspal: 1.0,
      beton: 1.2,
    },
    drainase: {
      sederhana: 0.9,
      pasangan_batu: 1.0,
      beton: 1.2,
    },
  };

  return mapping[type]?.[jenis] || 1.0;
}

// ==========================
// COMPLEXITY FACTOR
// ==========================
function getComplexityFactor(kondisi) {
  switch (kondisi) {
    case "mudah":
      return 1.0;
    case "sedang":
      return 1.2;
    case "sulit":
      return 1.4;
    default:
      return 1.0;
  }
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
// DIMENSION CALCULATION
// ==========================
function calculateDimensi(type, input) {
  const { panjang, lebar, tinggi } = input;

  switch (type) {
    case "jembatan":
    case "jalan":
      if (!panjang || !lebar) {
        throw new Error("Panjang dan lebar wajib diisi");
      }
      return panjang * lebar; // m²

    case "drainase":
      if (!panjang || !tinggi) {
        throw new Error("Panjang dan tinggi wajib diisi");
      }
      return panjang * tinggi * 0.3; // volume m³ (asumsi tebal 0.3m)

    default:
      throw new Error("Tipe infrastruktur tidak valid");
  }
}

// ==========================
// VALIDATION
// ==========================
function validateInput(input) {
  const { type, jenis, lokasi, kondisi } = input;

  if (!INFRA_TYPES.includes(type)) {
    throw new Error("Tipe infrastruktur tidak valid");
  }

  if (!jenis) {
    throw new Error("Jenis infrastruktur wajib diisi");
  }

  if (!["Kota kecil", "Kota sedang", "Kota besar"].includes(lokasi)) {
    throw new Error("Lokasi tidak valid");
  }

  if (!["mudah", "sedang", "sulit"].includes(kondisi)) {
    throw new Error("Kondisi tidak valid");
  }
}

// ==========================
// CORE CALCULATION
// ==========================
function hitungRABInfra(input) {
  validateInput(input);

  const { type, jenis, lokasi, kondisi } = input;

  const dimensi = calculateDimensi(type, input);

  const jenisFactor = getJenisFactor(type, jenis);
  const complexityFactor = getComplexityFactor(kondisi);
  const locationFactor = getLocationFactor(lokasi);

  const baseCost = dimensi * BASE_HARGA_RAB_INFRA;

  let total = baseCost * jenisFactor * complexityFactor * locationFactor;

  // ==========================
  // OPTIONAL ADJUSTMENTS
  // ==========================

  // Proyek sangat kecil
  if (dimensi < 10) {
    total *= 1.15;
  }

  // Proyek besar (efisiensi)
  if (dimensi > 200) {
    total *= 0.9;
  }

  return {
    total,
    dimensi,
    breakdown: {
      baseCost,
      jenisFactor,
      complexityFactor,
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
function calculateRABInfra(input) {
  const result = hitungRABInfra(input);
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
      dimensi: result.dimensi,
      breakdown: result.breakdown,
    },
    meta: {
      akurasi: "60-70%",
      note: [
        "Estimasi berbasis dimensi (luas/volume)",
        "Belum termasuk survey teknis & desain detail",
        "Kondisi lapangan sangat mempengaruhi hasil akhir",
        "Infrastruktur memiliki variabilitas tinggi tergantung lokasi",
      ],
    },
  };
}

// ==========================
// EXPORT
// ==========================
export { calculateRABInfra };
