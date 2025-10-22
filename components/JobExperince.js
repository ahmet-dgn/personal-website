export default function JobExperince() {
  const experiences = [
    {
      company: "Holly Palm",
      position: "Front-End Developer (Shopify Specialist)",
      period: "09/2024 - Present",
      responsibilities: [
        "Front-end developer for enterprise integration platform serving 50+ clients.",
        "Built multi-tenant application with Next.js, React, and TypeScript.",
        "Developed Shopify apps using Remix.js and custom themes with Liquid.",
        "Technologies: Next.js, React, Remix.js, TypeScript, Shopify, Liquid, GraphQL"
      ]
    },
    {
      company: "Self-Employed",
      position: "Freelance Web Developer",
      period: "01/2024 - 09/2024",
      responsibilities: [
        "Developed e-commerce and web solutions for international and local clients",
        "Built Shopify stores, React/Next.js applications, and WordPress websites",
        "Key projects: E-commerce store (Shopify), Agency site (Canada), Corporate websites",
        "Technologies: React, Next.js, Shopify, Liquid, WordPress, JavaScript, Figma"
      ]
    },
    {
      company: "Medicom",
      position: "Front-End Developer & Project Coordinator Remote",
      period: "03/2019 - 01/2024",
      responsibilities: [
        "Developed e-commerce themes and custom features for online stores",
        "Wrote test cases, managed bug tracking, and coordinated with development team",
        "Interviewed customers to gather requirements and planned project timelines",
        "Technologies: JavaScript, React, WordPress, HTML/CSS"
      ]
    },
    {
      company: "Mabeyn Advertising Agency",
      position: "Graphic Designer and Photographer",
      period: "10/2015 - 11/2017",
      responsibilities: [
        "Designed marketing materials including restaurant menus and brand identity",
        "Professional product and food photography for restaurants and retail businesses",
      ]
    }
  ];

  return (
    <section
      className="bg-blue-800 py-24 sm:py-32 relative isolate overflow-hidden"
      id="experience"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl mb-6 text-center font-bold tracking-tight  sm:text-4xl max-w-[500px] mx-auto ">
            Work Experience
          </h2>
          <div className="mx-auto  max-w-5xl   bg-white/10 py-16 px-8 rounded-xl w-full">
            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className={"flex flex-col md:flex-row md:justify-between "}>
                    <p className="text-lg font-bold mb-2">
                      {exp.company} | {exp.position}
                    </p>
                    <p>{exp.period}</p>
                  </div>
                  <div className={"w-full h-[0.5px] bg-white font-light"}></div>
                  <ul className="list-disc px-4 text-light">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}