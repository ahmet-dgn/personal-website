export default function JobExperince() {
  return (
    <section
      className="bg-blue-800 py-24 sm:py-32 relative isolate overflow-hidden"
      id="experience"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl mb-6 text-center font-bold tracking-tight text-white sm:text-4xl max-w-[500px] mx-auto ">
          Job Experience
        </h2>
        <div className="mx-auto grid max-w-[500px] grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 bg-white/5 py-16 px-8 rounded-xl">
          <div className="flex flex-col items-center pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 ">
            <p className="text-lg sm:text-xl font-bold mb-2 text-white text-center">
              {" "}
              Graphic Designer and <br /> Advertising Photographer
            </p>
            <p className=" text-white mb-2"> Mabeyn Reklam Evi </p>
            <p className="text-sm text-white">01/2015 - 01/2017</p>
          </div>
          <div className="flex flex-col border-t border-gray-50/30 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <div className="flex flex-col items-center   lg:pr-8 xl:pr-20 ">
              <p className="text-xl font-bold mb-2 text-gray-200 text-center">
                {" "}
                Frontend Developer and <br /> Project Manager
              </p>
              <p className=" text-white mb-2"> Medicom </p>
              <p className="text-sm text-white">01/2019 - 01/2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
