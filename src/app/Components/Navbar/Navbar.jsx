"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="bg-[#F5F5F5] shadow-md">
      <div className="hidden max-w-7xl mx-auto lg:flex items-center justify-between py-2">
        {/* Logo */}
        {/* <div className='text-xl font-bold'>Logo</div> */}
        <Image
          src={"/logo.png"}
          alt="logo"
          width={1000}
          height={1000}
          className="w-20"
        />

        {/* Desktop Menu */}
        <ul className="flex items-center gap-[46px]">
          <li className="font-semibold cursor-pointer hover:text-[#D0A148]">
            Tours
          </li>
          <li className="font-semibold cursor-pointer hover:text-[#D0A148]">
            Destination
          </li>
          <li className="font-semibold cursor-pointer hover:text-[#D0A148]">
            Blog
          </li>
          <li className="font-semibold cursor-pointer hover:text-[#D0A148]">
            Page
          </li>
          <li className="font-semibold cursor-pointer hover:text-[#D0A148]">
            Contact
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-white px-6 py-2 font-semibold rounded-lg">
            Login
          </button>
          <button className="btn-primary">Sign Up</button>
          {/* <button className='bg-[#F8CB2E] px-6 py-2 font-semibold rounded-lg'>Sign Up</button> */}
          <button className="bg-white px-6 py-2 font-semibold rounded-lg">
            B2B
          </button>
        </div>
      </div>

      {/* mobile nav  */}
      <div className="lg:hidden fixed top-0 left-0 right-0 flex items-center justify-between bg-[#706d6d] text-white px-4 py-3 z-40 border-b-2 border-[#B82525]">
        {/* Mobile Hamburger */}
        <button
          onClick={toggleDrawer}
          className="flex items-center justify-center"
        >
          <FiMenu size={24} />
        </button>

        {/* Logo */}
        <div className="flex justify-end">
          <div className="bg-white rounded-full p-2 flex items-center justify-center w-10 h-10">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={30}
              height={30}
              className="w-6"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 md:w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Drawer Header (Logo + Close) */}
        <div className="sticky top-0 bg-[#706d6d] text-white z-10 flex items-center justify-between px-4 py-3 border-b-2 border-[#B82525]">
          <button onClick={toggleDrawer}>
            <FiX size={24} />
          </button>
          <div className="flex justify-end">
            <div className="bg-white rounded-full p-2 flex items-center justify-center w-10 h-10">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={30}
                height={30}
                className="w-6"
              />
            </div>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="flex flex-col justify-between h-full">
          {/* Scrollable Content */}
          <div className="overflow-y-auto px-4 py-4 flex-1">
            <ul className="space-y-4">
              <li className="font-medium">Tours</li>
              <li className="font-medium">Destination</li>
              <li className="font-medium">Blog</li>
              <li className="font-medium">Page</li>
              <li className="font-medium">Contact</li>
            </ul>
          </div>

          {/* Bottom Sticky Buttons */}
          <div className="px-4 py-4 space-y-3 mb-12 bg-white">
            <button className="block w-full bg-white px-8 py-3 font-semibold rounded-lg border">
              Login
            </button>
            <button className="block w-full bg-yellow-400 px-8 py-3 font-semibold rounded-lg">
              Sign Up
            </button>
            <button className="block w-full bg-white px-8 py-3 font-semibold rounded-lg border">
              B2B
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 blur-[10px] z-45"
          onClick={toggleDrawer}
        />
      )}
    </nav>
  );
};

export default Navbar;