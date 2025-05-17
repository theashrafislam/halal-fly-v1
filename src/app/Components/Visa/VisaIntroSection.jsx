import { BsAirplaneFill } from "react-icons/bs";

const VisaIntroSection = () => {
    return (
        <div
            className="w-full h-[100vh] md:h-[120vh] bg-[#171717] bg-cover bg-center bg-no-repeat relative flex items-center"
            style={{
                backgroundImage: "url('/visa-bg.png')",
            }}
        >
            {/* Content (Left side) */}
            <div className="px-4 md:pl-16 text-white z-10 space-y-3 max-w-xl">
                <p className="text-lg sm:text-xl md:text-2xl font-philosopher">
                    Welcome to our store.
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-[42px] font-philosopher font-bold leading-snug">
                    Discover Types Of <br />
                    Visa We Provide
                </h1>
                <p className="text-sm sm:text-base">
                    An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.
                </p>
                <p className="text-sm sm:text-base">
                    An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.
                </p>
                <div className="pt-6">
                    <button className="px-5 sm:px-6 py-2 sm:py-3 bg-[#D0A148] rounded-md text-white font-semibold transition">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Info Box (Right side - Absolute) */}
            <div className="absolute p-4 sm:p-5 h-36 sm:h-44 rounded-lg bg-[#D0A148] right-5 bottom-5 md:right-10 md:bottom-10 lg:right-[12%] lg:top-20 hidden sm:flex flex-col items-center justify-center text-white shadow-lg">
                <BsAirplaneFill className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
                <h5 className="text-4xl sm:text-6xl font-bold font-philosopher">10M</h5>
                <p className="text-sm sm:text-base font-bold font-philosopher">
                    Different Parts
                </p>
            </div>
        </div>
    );
};

export default VisaIntroSection;