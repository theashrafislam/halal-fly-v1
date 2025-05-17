'use client';

import Link from 'next/link';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const ContactHeaderSection = () => {
  return (
    <div className="bg-[#8C8C9D] py-20 font-philosopher text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-[60px] font-bold mb-2">Contact Us</h1>
        <div className="flex justify-center items-center gap-1 text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <MdOutlineKeyboardArrowRight className='text-2xl'/>
          <Link href={'/contact'} className="font-semibold">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default ContactHeaderSection;