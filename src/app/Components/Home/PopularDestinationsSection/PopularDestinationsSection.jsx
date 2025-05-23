// "use client"


// import { fetchCategories } from "@/features/categories/categoriesSlice";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import Image from "next/image";
// import React, { useEffect } from "react";

// const PopularDestinationsSection = () => {

//   // api call using redux 
//   const dispatch = useAppDispatch()
//   const { categories, loading, error } = useAppSelector((state) => state.categories?.categories)

//   useEffect(() => {
//     dispatch(fetchCategories())
//   }, [dispatch]);

//   console.log(categories);

//   const destinations = [
//     {
//       name: "Europe",
//       tours: "67 Tours",
//       image: "/hero-section.jpg",
//       size: "large",
//     },
//     {
//       name: "Africa Wilds",
//       tours: "142 Tours",
//       image: "/hero-section.jpg",
//       size: "medium",
//     },
//     {
//       name: "Saudi Arabia",
//       tours: "15 Tours",
//       image: "/hero-section.jpg",
//       size: "small",
//     },
//     {
//       name: "South America",
//       tours: "31 Tours",
//       image: "/hero-section.jpg",
//       size: "small",
//     },
//   ];

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <LoadingSpinner text="Loading tour details..." />
//       </div>
//     );
//   }
//   if(error) {
//     return (
//       <div>{error}</div>
//     )
//   }

//   return (
//     <div className="py-20 bg-[#000000] text-[#D0A148]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-philosopher">
//             Popular Destinations
//           </h2>
//           <p className="text-base max-w-3xl mx-auto opacity-90">
//             An enim nullam tempor gravida donec enim congue magna at pretium
//             purus pretium ligula rutrum luctus risusd diam eget risus varius
//             blandit sit amet non magna.
//           </p>
//         </div>

//         <div className="grid grid-cols-12 gap-4">
//           {/* Large destination - Europe */}
//           <div className="col-span-12 md:col-span-6 relative h-[400px] overflow-hidden rounded-lg border border-[#D0A148] border-b-4 border-t-4">
//             <Image
//               src={destinations[0].image}
//               alt={destinations[0].name}
//               fill
//               className="object-cover transition-transform hover:scale-110 duration-500"
//             />
//             <div className="absolute bottom-6 text-[#FFFFFF] left-6 z-10">
//               <h3 className="text-4xl font-bold font-philosopher mb-2">
//                 {destinations[0].name}
//               </h3>
//               <span className="px-4 py-1 rounded-full text-sm">
//                 {destinations[0].tours}
//               </span>
//             </div>
//           </div>

//           <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-4">
//             {/* Medium destination - Africa */}
//             <div className="col-span-12 relative h-[200px] overflow-hidden rounded-lg border border-[#D0A148] border-b-4 border-t-4">
//               <Image
//                 src={destinations[1].image}
//                 alt={destinations[1].name}
//                 fill
//                 className="object-cover transition-transform hover:scale-110 duration-500"
//               />
//               <div className="absolute bottom-6 left-6 z-10">
//                 <h3 className="text-3xl text-[#FFFFFF] font-bold font-philosopher mb-2">
//                   {destinations[1].name}
//                 </h3>
//                 <span className="px-4 py-1 text-[#FFFFFF] rounded-full text-sm">
//                   {destinations[1].tours}
//                 </span>
//               </div>
//             </div>

//             {/* Small destination - Saudi Arabia */}
//             <div className="col-span-12 md:col-span-6 relative h-[180px] overflow-hidden rounded-lg border border-[#D0A148] border-b-4 border-t-4">
//               <Image
//                 src={destinations[2].image}
//                 alt={destinations[2].name}
//                 fill
//                 className="object-cover transition-transform hover:scale-110 duration-500"
//               />
//               <div className="absolute bottom-4 text-[#FFFFFF] left-4 z-10">
//                 <h3 className="text-xl font-bold font-philosopher mb-2">
//                   {destinations[2].name}
//                 </h3>
//                 <span className="px-3 py-1 rounded-full text-xs">
//                   {destinations[2].tours}
//                 </span>
//               </div>
//             </div>

//             {/* Small destination - South America */}
//             <div className="col-span-12 md:col-span-6 relative h-[180px] overflow-hidden rounded-lg border border-[#D0A148] border-b-4 border-t-4">
//               <Image
//                 src={destinations[3].image}
//                 alt={destinations[3].name}
//                 fill
//                 className="object-cover transition-transform hover:scale-110 duration-500"
//               />
//               <div className="absolute bottom-4 text-[#FFFFFF] left-4 z-10">
//                 <h3 className="text-xl font-bold font-philosopher mb-2">
//                   {destinations[3].name}
//                 </h3>
//                 <span className="px-3 py-1 rounded-full text-xs">
//                   {destinations[3].tours}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularDestinationsSection;


"use client";

import { fetchCategories } from "@/features/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import React, { useEffect } from "react";
import LoadingSpinner from "../../Common/LoadingSpinner";

const PopularDestinationsSection = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error } = useAppSelector(
    (state) => state.categories?.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner text="Loading tour details..." />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  return (
    <div className="py-20 bg-[#000000] text-[#D0A148]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-philosopher">
            Popular Destinations
          </h2>
          <p className="text-base max-w-3xl mx-auto opacity-90">
            An enim nullam tempor gravida donec enim congue magna at pretium
            purus pretium ligula rutrum luctus risusd diam eget risus varius
            blandit sit amet non magna.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {categories?.length === 4 && (
            <>
              {/* Large destination */}
              <div className="col-span-12 md:col-span-6 relative h-[400px] overflow-hidden rounded-lg border border-[#D0A148] border-b-4 border-t-4">
                <Image
                  src={categories[0].categoryThumbnail}
                  alt={categories[0].name}
                  fill
                  className="object-cover transition-transform hover:scale-110 duration-500"
                />
                <div className="absolute bottom-6 text-[#FFFFFF] left-6 z-10">
                  <h3 className="text-4xl font-bold font-philosopher mb-2">
                    {categories[0].name}
                  </h3>
                  <span className="px-4 py-1 rounded-full text-sm">
                    {categories[0].description}
                  </span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-4">
                {/* Medium destination */}
                <div className="col-span-12 relative h-[200px] overflow-hidden rounded-lg border border-[#D0A148] border-b-4 border-t-4">
                  <Image
                    src={categories[1].categoryThumbnail}
                    alt={categories[1].name}
                    fill
                    className="object-cover transition-transform hover:scale-110 duration-500"
                  />
                  <div className="absolute bottom-6 left-6 z-10">
                    <h3 className="text-3xl text-[#FFFFFF] font-bold font-philosopher mb-2">
                      {categories[1].name}
                    </h3>
                    <span className="px-4 py-1 text-[#FFFFFF] rounded-full text-sm">
                      {categories[1].description}
                    </span>
                  </div>
                </div>

                {/* Small destinations */}
                {[2, 3].map((i) => (
                  <div
                    key={i}
                    className="col-span-12 md:col-span-6 relative h-[180px] overflow-hidden rounded-lg border border-[#D0A148] border-b-4 border-t-4"
                  >
                    <Image
                      src={categories[i].categoryThumbnail}
                      alt={categories[i].name}
                      fill
                      className="object-cover transition-transform hover:scale-110 duration-500"
                    />
                    <div className="absolute bottom-4 text-[#FFFFFF] left-4 z-10">
                      <h3 className="text-xl font-bold font-philosopher mb-2">
                        {categories[i].name}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs">
                        {categories[i].description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinationsSection;