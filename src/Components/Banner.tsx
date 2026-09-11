import hero from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-6 py-12">
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-4 text-gray-500 text-sm sm:text-base">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
          <button className="rounded-full bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full max-w-xs md:max-w-md">
        <img
          src={hero}
          alt="dev stack illustration"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
