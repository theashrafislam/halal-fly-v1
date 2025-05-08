import React from "react";

const SubscribeSection = () => {
  return (
    <div className="bg-[#000000]">
      <div className="max-w-5xl mx-auto py-10 px-4 bg-[#000000] sm:px-6 lg:px-8 relative">
        <div
          className="rounded-xl overflow-hidden shadow-lg border-2 border-[#D0A148] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/subscribe-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "180px", // Use min-height instead of fixed height for better responsiveness
          }}
        >
          <div className="flex items-center justify-center md:justify-end border-2 border-[#D0A148] h-full bg-gradient-to-r from-[#4F46E5]/80 to-[#4F46E5]/80 md:from-transparent md:to-[#4F46E5]/90">
            <div className="w-full md:w-1/2 p-6 md:p-8 text-[#D0A148] text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 font-philosopher">
                <span className="block sm:inline">Subscribe Newsletter</span>{" "}
                <span className="block sm:inline">&amp; Get Company News.</span>
              </h3>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 px-4 rounded-md border-2 border-[#D0A148] flex-grow bg-white text-[#D0A148] focus:outline-none text-sm"
                />
                <button className="bg-[#D0A148] hover:bg-[#D81B60] text-white font-medium py-2 px-4 rounded-md transition-colors whitespace-nowrap text-sm">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;