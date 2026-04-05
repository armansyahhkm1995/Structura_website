import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { calculateRAB } from "../utils/HomeCalculator";
import { calculateRABKomersial } from "../utils/CommercialCalculator";
import { calculateRABInfra } from "../utils/InfrastructureCalculator";

export default function Calculator() {
  const PROJECT_CONFIG = {
    rumah: {
      title: "Estimasi Biaya Rumah Tinggal",
      subtitle:
        "Hitung estimasi kasar biaya jasa RAB untuk pembangunan rumah tinggal Anda.",
    },
    komersial: {
      title: "Estimasi Biaya Bangunan Komersial",
      subtitle:
        "Perkirakan kebutuhan biaya perencanaan untuk proyek ruko, kantor, atau usaha Anda.",
    },
    infrastruktur: {
      title: "Estimasi Biaya Infrastruktur",
      subtitle:
        "Simulasikan perhitungan awal untuk proyek infrastruktur skala kecil seperti jembatan atau jalan lingkungan.",
    },
  };

  const [step, setStep] = useState(1);
  const [result, setResult] = useState(null);
  const [projectType, setProjectType] = useState("rumah");

  const [form, setForm] = useState({
    luas: "",
    lantai: 1,
    kualitas: "Menengah",
    lokasi: "Kota sedang",

    // komersial
    jenis: "ruko",
    interiorLevel: "basic",

    // 🔥 INFRA
    type: "jalan",
    jenisInfra: "",
    kondisi: "sedang",
    panjang: "",
    lebar: "",
    tinggi: "",
  });

  const handleNext = () => {
    if (!validateStep()) return;
    setErrors({});
    setStep((s) => s + 1);
  };
  const handleBack = () => setStep((s) => s - 1);

  const handleCalculate = () => {
    try {
      let res;

      if (projectType === "rumah") {
        res = calculateRAB({
          ...form,
          luas: Number(form.luas),
        });
        setResult(res);
        setStep(5);
      }

      if (projectType === "komersial") {
        res = calculateRABKomersial({
          ...form,
          luas: Number(form.luas),
        });
        setResult(res);
        setStep(6);
      }

      if (projectType === "infrastruktur") {
        res = calculateRABInfra({
          type: form.type,
          jenis: form.jenisInfra,
          kondisi: form.kondisi,
          lokasi: form.lokasi,
          panjang: Number(form.panjang),
          lebar: Number(form.lebar),
          tinggi: Number(form.tinggi),
        });

        setResult(res);
        setStep(8); // result step
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const totalStep = {
    rumah: 4,
    komersial: 5,
    infrastruktur: 5,
  }[projectType];

  const getDisplayStep = () => {
    if (projectType === "infrastruktur") {
      return step - 2; // karena mulai dari step 3
    }
    return step;
  };

  const formatLabel = (text) => {
    return text.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  };

  const validateStep = () => {
    let newErrors = {};

    // STEP 1 (rumah & komersial)
    if (step === 1 && projectType !== "infrastruktur") {
      if (!form.luas || Number(form.luas) <= 0) {
        newErrors.luas = "Luas bangunan wajib diisi";
      }
    }

    // STEP 4 INFRA (dimensi)
    if (projectType === "infrastruktur" && step === 4) {
      if (!form.panjang) {
        newErrors.panjang = "Panjang wajib diisi";
      }

      if ((form.type === "jalan" || form.type === "jembatan") && !form.lebar) {
        newErrors.lebar = "Lebar wajib diisi";
      }

      if (form.type === "drainase" && !form.tinggi) {
        newErrors.tinggi = "Tinggi wajib diisi";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [errors, setErrors] = useState({});

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 flex-col">
      {/* HERO */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            <strong>{PROJECT_CONFIG[projectType].title}</strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-600 max-w-2xl mx-auto text-center md:pl-25"
          >
            {PROJECT_CONFIG[projectType].subtitle}
          </motion.p>
        </div>
      </section>

      <div className="flex flex-col w-full max-w-xl border-0 rounded-xl p-6 shadow-sm">
        {/* TAB */}
        <div className="flex gap-2 bg-gray-100 p-2 rounded-xl justify-center mb-6">
          {["rumah", "komersial", "infrastruktur"].map((type) => (
            <button
              key={type}
              onClick={() => {
                setProjectType(type);
                setStep(type === "infrastruktur" ? 3 : 1);
                setResult(null);
              }}
              className={`px-4 py-2 rounded-xl text-sm capitalize ${
                projectType === type
                  ? "bg-white shadow font-medium"
                  : "text-gray-500"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mb-6 text-sm text-gray-500">
          Step {getDisplayStep() > totalStep ? totalStep : getDisplayStep()}{" "}
          dari {totalStep}
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {step === 1 && projectType !== "infrastruktur" && (
            <motion.div key="1">
              <h2 className="text-xl font-semibold mb-4 pb-4">Luas Bangunan</h2>
              <input
                placeholder="Contoh: 50"
                type="number"
                value={form.luas}
                onChange={(e) => {
                  setForm({ ...form, luas: e.target.value });
                  setErrors({ ...errors, luas: "" });
                }}
                className={`w-full border p-3 rounded-xl ${
                  errors.luas ? "border-red-500" : ""
                }`}
              />

              {errors.luas && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.luas}
                </p>
              )}
              <button
                onClick={handleNext}
                className="mt-4 w-full bg-blue-600 text-white p-3 rounded-xl"
              >
                Lanjut
              </button>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && projectType !== "infrastruktur" && (
            <motion.div key="2">
              <h2 className="text-xl font-semibold mb-4  pb-4">
                Jumlah Lantai
              </h2>

              {[1, 2, 3].map((l) => (
                <button
                  key={l}
                  onClick={() => setForm({ ...form, lantai: l })}
                  className={`block w-full mb-2 p-3 rounded-xl border ${
                    form.lantai === l ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {l} Lantai
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button onClick={handleBack}>Kembali</button>
                <button
                  className="mt-4 bg-blue-600 text-white p-3 rounded-xl"
                  onClick={handleNext}
                >
                  Lanjut
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 RUMAH */}
          {projectType === "rumah" && step === 3 && (
            <motion.div key="3-rumah">
              <h2 className="text-xl font-semibold mb-4  pb-4">
                Kualitas Bangunan
              </h2>

              {[
                { label: "Sederhana", value: "Sederhana" },
                { label: "Menengah", value: "Menengah" },
                { label: "Premium", value: "Premium" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setForm({ ...form, kualitas: item.value })}
                  className={`block w-full mb-2 p-3 rounded-xl border ${
                    form.kualitas === item.value ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button onClick={handleBack}>Kembali</button>
                <button
                  className="mt-4 bg-blue-600 text-white p-3 rounded-xl"
                  onClick={handleNext}
                >
                  Lanjut
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 KOMERSIAL */}
          {projectType === "komersial" && step === 3 && (
            <motion.div key="3-kom">
              <h2 className="text-xl font-semibold mb-4  pb-4">
                Jenis Bangunan
              </h2>

              {[
                { label: "Gudang", value: "gudang" },
                { label: "Ruko", value: "ruko" },
                { label: "Kantor", value: "kantor" },
                { label: "Klinik", value: "klinik" },
                { label: "Cafe", value: "cafe" },
                { label: "Restoran", value: "restoran" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setForm({ ...form, jenis: item.value })}
                  className={`block w-full mb-2 p-3 rounded-xl border ${
                    form.jenis === item.value ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button onClick={handleBack}>Kembali</button>
                <button
                  className="mt-4 bg-blue-600 text-white p-3 rounded-xl"
                  onClick={handleNext}
                >
                  Lanjut
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 INFRA */}
          {projectType === "infrastruktur" && step === 3 && (
            <motion.div key="3-infra">
              <h2 className="text-xl font-semibold mb-4 pb-4">
                Tipe Infrastruktur
              </h2>

              {[
                { label: "Jalan", value: "jalan" },
                { label: "Jembatan", value: "jembatan" },
                { label: "Drainase", value: "drainase" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() =>
                    setForm({
                      ...form,
                      type: item.value,
                      jenisInfra: "", // reset
                    })
                  }
                  className={`block w-full mb-2 p-3 rounded-xl border ${
                    form.type === item.value ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button onClick={handleBack}>Kembali</button>
                <button
                  className="mt-4 bg-blue-600 text-white p-3 rounded-xl"
                  onClick={handleNext}
                >
                  Lanjut
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4 (SEMUA kECUALI INFRA) */}
          {step === 4 && projectType !== "infrastruktur" && (
            <motion.div key="4">
              <h2 className="text-xl font-semibold mb-4  pb-4">
                Lokasi Proyek
              </h2>

              {[
                { label: "Kota Kecil", value: "Kota kecil" },
                { label: "Kota Sedang", value: "Kota sedang" },
                { label: "Kota Besar", value: "Kota besar" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setForm({ ...form, lokasi: item.value })}
                  className={`block w-full mb-2 p-3 rounded-xl border ${
                    form.lokasi === item.value ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button onClick={handleBack}>Kembali</button>

                {projectType === "rumah" ? (
                  <button
                    className="bg-blue-600 text-white p-3 rounded-xl"
                    onClick={handleCalculate}
                  >
                    Lihat Estimasi
                  </button>
                ) : (
                  <button
                    className="mt-4 bg-blue-600 text-white p-3 rounded-xl"
                    onClick={handleNext}
                  >
                    Lanjut
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 4 DIMENSI */}
          {projectType === "infrastruktur" && step === 4 && (
            <motion.div key="4-infra">
              <h2 className="text-xl font-semibold mb-4 pb-4">
                Dimensi Proyek
              </h2>

              <input
                placeholder="Panjang (m)"
                type="number"
                className={`w-full border p-3 rounded-xl mb-3 ${
                  errors.panjang ? "border-red-500" : ""
                }`}
                value={form.panjang}
                onChange={(e) => {
                  setForm({ ...form, panjang: e.target.value });
                  setErrors({ ...errors, panjang: "" });
                }}
              />

              {errors.panjang && (
                <p className="text-red-500 text-sm pb-6 text-left">
                  {errors.panjang}
                </p>
              )}

              {(form.type === "jalan" || form.type === "jembatan") && (
                <>
                  <input
                    placeholder="Lebar (m)"
                    type="number"
                    className={`w-full border p-3 rounded-xl mb-3 ${
                      errors.lebar ? "border-red-500" : ""
                    }`}
                    value={form.lebar}
                    onChange={(e) => {
                      setForm({ ...form, lebar: e.target.value });
                      setErrors({ ...errors, lebar: "" });
                    }}
                  />

                  {errors.lebar && (
                    <p className="text-red-500 pb-6 text-sm mb-2 text-left">
                      {errors.lebar}
                    </p>
                  )}
                </>
              )}

              {form.type === "drainase" && (
                <>
                  <input
                    placeholder="Tinggi (m)"
                    type="number"
                    className={`w-full border p-3 rounded-xl mb-3 ${
                      errors.tinggi ? "border-red-500" : ""
                    }`}
                    value={form.tinggi}
                    onChange={(e) => {
                      setForm({ ...form, tinggi: e.target.value });
                      setErrors({ ...errors, tinggi: "" });
                    }}
                  />

                  {errors.tinggi && (
                    <p className="text-red-500 text-sm mb-2 text-left">
                      {errors.tinggi}
                    </p>
                  )}
                </>
              )}

              <div className="flex justify-between mt-4">
                <button onClick={handleBack}>Kembali</button>
                <button
                  className="bg-blue-600 text-white p-3 rounded-xl"
                  onClick={handleNext}
                >
                  Lanjut
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5 KOMERSIAL */}
          {projectType === "komersial" && step === 5 && (
            <motion.div key="5-kom">
              <h2 className="text-xl font-semibold mb-4  pb-4">
                Interior Level
              </h2>

              {[
                { label: "Basic", value: "basic" },
                { label: "Custom", value: "custom" },
                { label: "High End", value: "high_end" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() =>
                    setForm({
                      ...form,
                      interiorLevel: item.value,
                    })
                  }
                  className={`block w-full mb-2 p-3 rounded-xl border ${
                    form.interiorLevel === item.value
                      ? "bg-blue-600 text-white"
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button onClick={handleBack}>Kembali</button>
                <button
                  className="mt-4 bg-blue-600 text-white p-3 rounded-xl"
                  onClick={handleCalculate}
                >
                  Lihat Estimasi
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5 INFRA - JENIS */}
          {projectType === "infrastruktur" && step === 5 && (
            <motion.div key="5-infra-jenis">
              <h2 className="text-xl font-semibold mb-4 pb-4">
                Jenis Material
              </h2>

              {(form.type === "jalan"
                ? ["tanah", "aspal", "beton"]
                : form.type === "jembatan"
                  ? ["kayu", "beton", "baja"]
                  : ["sederhana", "pasangan_batu", "beton"]
              ).map((j) => (
                <button
                  key={j}
                  onClick={() => setForm({ ...form, jenisInfra: j })}
                  className={`block w-full mb-2 p-3 rounded-xl border ${
                    form.jenisInfra === j ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {formatLabel(j)}
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button onClick={handleBack}>Kembali</button>
                <button
                  className="bg-blue-600 text-white p-3 rounded-xl"
                  onClick={handleNext}
                >
                  Lanjut
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 6 INFRA - KONDISI */}
          {projectType === "infrastruktur" && step === 6 && (
            <motion.div key="6-infra-kondisi">
              <h2 className="text-xl font-semibold mb-4 pb-4">
                Kondisi Lapangan
              </h2>

              {["mudah", "sedang", "sulit"].map((k) => (
                <button
                  key={k}
                  onClick={() => setForm({ ...form, kondisi: k })}
                  className={`block w-full mb-2 p-3 rounded-xl border ${
                    form.kondisi === k ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {formatLabel(k)}
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button onClick={handleBack}>Kembali</button>
                <button
                  className="bg-blue-600 text-white p-3 rounded-xl"
                  onClick={handleNext}
                >
                  Lanjut
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 7 INFRA - LOKASI */}
          {projectType === "infrastruktur" && step === 7 && (
            <motion.div key="7-infra-lokasi">
              <h2 className="text-xl font-semibold mb-4 pb-4">Lokasi Proyek</h2>

              {["Kota kecil", "Kota sedang", "Kota besar"].map((l) => (
                <button
                  key={l}
                  onClick={() => setForm({ ...form, lokasi: l })}
                  className={`block w-full mb-2 p-3 rounded-xl border ${
                    form.lokasi === l ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {l}
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button onClick={handleBack}>Kembali</button>
                <button
                  className="bg-blue-600 text-white p-3 rounded-xl"
                  onClick={handleCalculate}
                >
                  Lihat Estimasi
                </button>
              </div>
            </motion.div>
          )}

          {/* RESULT */}
          {((projectType === "rumah" && step === 5) ||
            (projectType === "komersial" && step === 6) ||
            (projectType === "infrastruktur" && step === 8)) &&
            result && (
              <motion.div key="result">
                <h2 className="text-xl font-semibold text-center mb-4">
                  Estimasi Biaya Jasa RAB
                </h2>

                {/* RANGE */}
                <div className="text-center text-2xl font-bold text-blue-600 mb-2">
                  {result.estimasi.formatted.low} –{" "}
                  {result.estimasi.formatted.high}
                </div>

                {/* AKURASI */}
                <p className="text-center text-sm text-gray-500 mb-6">
                  Akurasi: {result.meta.akurasi}
                </p>

                {/* NOTES */}
                <div className="bg-gray-50 p-4 rounded-xl text-sm space-y-2 mb-6">
                  {result.meta.note.map((n, i) => (
                    <div key={i}>• {n}</div>
                  ))}
                </div>

                {/* ACTION */}
                <button
                  onClick={() => setStep(1)}
                  className="w-full border py-3 rounded-xl mb-3"
                >
                  Hitung Ulang
                </button>

                <a
                  href={`https://wa.me/?text=Halo saya ingin konsultasi proyek. Estimasi saya ${result.estimasi.formatted.low} - ${result.estimasi.formatted.high}`}
                  target="_blank"
                  className="block text-center bg-blue-600 text-white py-3 rounded-xl"
                >
                  Konsultasi via WhatsApp
                </a>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}
