import { promises as fs } from "fs";
import Link from "next/link";
export default async function Projects() {
  const file = await fs.readFile(process.cwd() + "/app/projects.json", "utf8");
  const projects = JSON.parse(file);

  return (
    <div className="bg-gray-200" id="projects">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <h2 className="text-3xl mb-6 lg:text-center font-bold tracking-tight text-gray-900 sm:text-4xl max-w-[500px] mx-auto px-6 ">
          Projects
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative isolate overflow-hidden bg-gray-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 mb-8"
          >
            <div className="mx-auto max-w-md text-left lg:mx-0 lg:flex-auto lg:py-32 ">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-6 text-gray-700">
                {project.desc}{" "}
                {project.note ? (
                  <span className="block  text-gray-700 mt-4">
                    {project.note}
                  </span>
                ) : (
                  ""
                )}
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6 ">
                {project.primaryBtn && (
                  <Link
                    target="_blank"
                    href={project.primaryUrl ? project.primaryUrl : "#"}
                    className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {project.primaryBtn}
                  </Link>
                )}
                {project.secondaryBtn && (
                  <Link
                    target="_blank"
                    href={project.secondaryUrl ? project.secondaryUrl : "#"}
                    className="rounded-md bg-blue-100 px-3.5 py-2.5 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {project.secondaryBtn}
                  </Link>
                )}
                {project.tertiaryBtn && (
                  <Link
                    target="_blank"
                    href={project.tertiaryUrl ? project.tertiaryUrl : "#"}
                    className="text-sm font-semibold leading-6 text-blue-800 hover:text-blue-700"
                  >
                    {project.tertiaryBtn}
                    <span aria-hidden="true"> →</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[45rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 object-cover"
                src={project.img}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
