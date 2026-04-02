export default function PortfolioGrid({ projects, onSelect }) {
  return (
    <section className="section">
      <div className="container-custom max-w-6xl">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Portfolio Proyek
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => onSelect(index)}
              className="card cursor-pointer hover:shadow-md transition"
            >
              <img
                src={project.images[0]}
                className="rounded-t-xl h-40 w-full object-cover"
              />

              <div className="p-4 text-sm">
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-muted">{project.location}</p>
                <p className="text-muted">{project.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
