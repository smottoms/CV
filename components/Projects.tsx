import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Todo App",
    description: "Full stack task management app with authentication.",
    tags: ["Next.js", "FastAPI", "SQLite"],
    image: "/assets/project-todo.jpg",
  },
  {
    title: "Blog Platform",
    description: "Modern blog with search, categories and dynamic pages.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/assets/project-blog.jpg",
  },
  {
    title: "Brand & Design Work",
    description: "Graphics and motion design for brands and events.",
    tags: ["Photoshop", "Illustrator", "After Effects"],
    image: "/assets/project-design.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#05070c] py-20 sm:py-24 px-6 border-t border-[#1c2230]/60">
      <div className="max-w-content mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accentSoft mb-5">
              FEATURED PROJECTS
              <span className="h-[1px] w-10 bg-accentSoft/60" />
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Things I&rsquo;ve Built
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accentSoft transition-colors"
          >
            View All Projects <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-[#1b2333] bg-[#0c1017] overflow-hidden hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="aspect-[16/10] bg-black/60 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-md bg-white/[0.04] border border-white/10 px-3 py-1 text-white/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
