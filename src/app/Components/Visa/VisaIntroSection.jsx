const VisaIntroSection = () => {
  return (
    <div
      className="w-full h-[90vh] bg-[#171717] bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/visa-bg.png')",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="absolute top-1/2 left-6 md:left-16 transform -translate-y-1/2 text-white z-10 space-y-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover Types Of <br />
          Visa We Provide
        </h1>
        <p className="text-lg">
          Explore various visa options that suit your travel or immigration needs.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition">
          Apply Now
        </button>
      </div>

      {/* Number */}
      <div className="absolute bottom-10 right-10 text-[100px] font-bold text-white opacity-10 z-0 select-none pointer-events-none">
        01
      </div>
    </div>
  );
};

export default VisaIntroSection;