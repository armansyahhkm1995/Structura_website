import TimelineCard from "../../ui/TimelineCard";
import { steps } from "../../../data/contact/journey";

export default function Journey() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-left md:text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            <strong className="text-black">
              Apa yang Akan Terjadi Setelah Anda{" "}
            </strong>
            <em className="text-primary">Menghubungi Kami</em>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-left md:text-center md:-translate-x-2 md:pl-50">
            Kami ingin setiap proses berjalan dengan jelas dan transparan.
            Berikut tahapan yang biasanya Anda lalui sejak konsultasi pertama
            hingga pekerjaan dimulai.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* LINE (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gray-200" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              const number = `0${i + 1}`;

              return (
                <div
                  key={i}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* LEFT */}
                  <div
                    className={`hidden md:block w-1/2 ${isLeft ? "pr-8" : ""}`}
                  >
                    {isLeft && (
                      <TimelineCard
                        step={step}
                        number={number}
                        align="right"
                        index={i}
                      />
                    )}
                  </div>

                  {/* CENTER ICON */}
                  <div className="hidden md:flex relative z-10 items-center justify-center w-12 h-12 rounded-full bg-white border shadow-sm">
                    <Icon className="w-5 h-5 text-gray-700" />
                  </div>

                  {/* RIGHT */}
                  <div
                    className={`hidden md:block w-1/2 ${!isLeft ? "pl-8" : ""}`}
                  >
                    {!isLeft && (
                      <TimelineCard
                        step={step}
                        number={number}
                        align="left"
                        index={i}
                      />
                    )}
                  </div>

                  {/* MOBILE */}
                  <div className="md:hidden w-full">
                    <TimelineCard
                      step={step}
                      number={number}
                      align="left"
                      index={i}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
