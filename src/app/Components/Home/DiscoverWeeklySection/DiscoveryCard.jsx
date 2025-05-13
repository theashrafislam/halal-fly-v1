import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiClock2, CiHeart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const DiscoveryCard = ({ card }) => {
  return (
    <div className="rounded-lg shadow-md text-[#2D3E50] bg-white overflow-hidden">
      <div className="relative">
        <Image
          src={card.image || "/hero-section.jpg"}
          className="w-full h-48 object-cover"
          alt={card.title || "Travel destination"}
          width={700}
          height={400}
        />
        <div className="bg-white rounded-full p-2 absolute top-2 right-2 shadow-sm">
          <CiHeart className="text-xl text-[#D0A148]" />
        </div>
        <div className="px-2 py-1 absolute bottom-2 left-3 rounded-md bg-white shadow-sm flex items-center gap-1">
          <CiClock2 className="text-[#00BB98]" />
          <p className="text-sm text-[#00BB98] font-medium">{card.days || 3} days</p>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold mb-2 font-philosopher">
          {card.title || "Venice, Rome and Milan – 9 Days 8 Nights"}
        </h4>
        <div className="flex items-center gap-1 mb-2">
          <FaLocationDot className="text-sm text-[#00BB98]" />
          <p className="text-xs text-gray-600">
            {card.location || "Bryce Canyon National Park, USA"}
          </p>
        </div>
        <div className="pb-4 flex items-center gap-0.5">
          {[...Array(Math.floor(card.rating || 5))].map((_, i) => (
            <IoStar key={i} className="text-[#FFC83E] text-sm" />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-lg text-[#211F1F] font-bold">€{card.price || "139.99"}</p>
            <del className="text-sm text-[#999]">
              €{card.originalPrice || "190.00"}
            </del>
          </div>
          <Link
            href={`/packages/${card.id || card}`}
            className="btn-primary px-4 py-1.5 text-sm"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCard;