import ServiceHeroSection from "../components/sections/ServiceHeroSection";
import ServiceSection from "../components/sections/ServiceSection";
import FinalCTA from "../components/sections/FinalCTA";

import cost_construction_planning from "../assets/services/cost_construction_planning.webp";
import rab from "../assets/services/rab.webp";
import boq from "../assets/services/boq.webp";
import cost_advisory_consultation from "../assets/services/cost_advisory_consultation.webp";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServiceHeroSection />
      <ServiceSection
        title="Cost Planning"
        desc="Memberikan gambaran awal biaya proyek..."
        points={[
          "Estimasi biaya per m²",
          "Estimasi total biaya",
          "Analisis awal kebutuhan anggaran",
        ]}
        image={cost_construction_planning}
      />

      <ServiceSection
        reverse
        title="RAB (Rencana Anggaran Biaya)"
        desc="Penyusunan biaya detail berdasarkan gambar..."
        points={[
          "Breakdown pekerjaan",
          "Analisis harga satuan",
          "Total biaya terstruktur",
        ]}
        image={rab}
      />

      <ServiceSection
        title="BOQ (Bill of Quantity)"
        desc="Dokumen detail kuantitas pekerjaan..."
        points={["Volume pekerjaan", "List item detail", "Format tender"]}
        image={boq}
      />

      <ServiceSection
        reverse
        title="Cost Advisory & Consultation"
        desc="Pendampingan dalam pengambilan keputusan biaya..."
        points={[
          "Review RAB",
          "Rekomendasi efisiensi",
          "Analisis risiko biaya",
        ]}
        image={cost_advisory_consultation}
      />

      <FinalCTA />
    </div>
  );
}
