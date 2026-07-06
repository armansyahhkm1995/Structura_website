function ProjectModal({ project, onClose, projects, index, setIndex }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImage, setCurrentImage] = useState(0);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "scope", label: "Scope & Approach" },
    { id: "challenge", label: "Challenge & Solution" },
    { id: "impact", label: "Impact" },
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl rounded-2xl relative max-h-[90vh] flex flex-col"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
        {/* IMAGE */}
        <div className="relative">
          <img
            src={project.images[currentImage]}
            className="w-full h-[260px] object-cover"
          />

          <button
            onClick={() =>
              setCurrentImage((prev) =>
                prev === 0 ? project.images.length - 1 : prev - 1,
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={() =>
              setCurrentImage((prev) =>
                prev === project.images.length - 1 ? 0 : prev + 1,
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full"
          >
            ›
          </button>

          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {project.images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  currentImage === i ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 space-y-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold leading-snug">
            {project.title}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed pb-4">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 pt-1 justify-center pb-4">
            {[project.location, project.size, project.type].map((info, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-gray-50 border"
              >
                {info}
              </span>
            ))}
          </div>

          {/* tabs */}
          <div className="flex gap-6 border-b justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 text-sm ${
                  activeTab === tab.id
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-sm text-gray-600 leading-relaxed space-y-6">
            {activeTab === "overview" && (
              <div className="space-y-5">
                {/* Story */}
                <p className="leading-relaxed text-left pb-4">
                  {project.overview}
                </p>

                {/* Mini Cards */}

                <p className="font-medium text-gray-800 mb-2 pb-4 text-left">
                  Kata kunci
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.keywords.map((item, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 border rounded-xl p-4 text-sm leading-relaxed text-left md:text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Closing Insight */}
                <p className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 text-sm text-gray-700 shadow-sm text-left">
                  {project.value}
                </p>
              </div>
            )}

            {activeTab === "scope" && (
              <div className="space-y-6">
                {/* Context */}
                <p className="space-y-5 text-left pb-4">{project.context}</p>

                {/* Scope */}
                <div>
                  <p className="font-medium text-gray-800 mb-2 pb-4 text-left">
                    Ruang Lingkup Pekerjaan
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.scope.map((item, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border rounded-xl p-4 leading-relaxed  text-left md:text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Approach */}
                <div>
                  <p className="font-medium text-gray-800 mb-2  pb-4 text-left">
                    Pendekatan yang Digunakan
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.approach.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white border rounded-xl p-4 shadow-sm leading-relaxed  text-left md:text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "challenge" && (
              <div className="space-y-6 text-left">
                <p className="leading-relaxed text-left pb-4">
                  {project.challenge_introduction}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Challenge */}
                  <div>
                    <p className="font-medium text-gray-800 mb-2 pb-2">
                      Tantangan
                    </p>
                    <div className="space-y-2">
                      {project.challenge.map((item, i) => (
                        <div
                          key={i}
                          className="bg-red-50 border border-red-100 rounded-xl p-4 text-sm leading-relaxed"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Solusi</p>
                    <div className="space-y-2">
                      {project.solution.map((item, i) => (
                        <div
                          key={i}
                          className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm leading-relaxed"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Insight */}
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 text-sm text-gray-700 shadow-sm text-left">
                  {project.challenge_insight}
                </div>
              </div>
            )}

            {activeTab === "impact" && (
              <div className="space-y-6">
                {/* Context */}
                <p className="text-left pb-4">{project.impact_introduction}</p>

                {/* Results */}
                <div>
                  <p className="font-medium text-gray-800 mb-2 pb-4 text-left">
                    Hasil Utama
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.impact.map((item, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border rounded-xl p-3  text-left md:text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Value */}
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 text-sm text-gray-700 shadow-sm text-left">
                  <p className="font-medium text-gray-800 mb-1">
                    Dampak untuk Klien
                  </p>
                  <p>{project.client_impact}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* NAV PROJECT */}
        <button
          onClick={() =>
            setIndex(index === 0 ? projects.length - 1 : index - 1)
          }
          className="absolute left-[-50px] top-1/2 bg-white px-3 py-2 rounded-full shadow"
        >
          ←
        </button>

        <button
          onClick={() =>
            setIndex(index === projects.length - 1 ? 0 : index + 1)
          }
          className="absolute right-[-50px] top-1/2 bg-white px-3 py-2 rounded-full shadow"
        >
          →
        </button>
      </motion.div>
    </motion.div>
  );
}

{
  /* MODAL */
}
{
  /* <AnimatePresence>
        {selectedIndex !== null && (
          <ProjectModal
            project={projects[selectedIndex]}
            projects={projects}
            index={selectedIndex}
            setIndex={setSelectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence> */
}
