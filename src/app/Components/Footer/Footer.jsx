import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <section className="bg-[#000000]">
      <div className="max-w-7xl mx-auto text-[#D0A148] py-16 px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and company info */}
          <div className="flex flex-col gap-6">
            <div className="w-24 h-24 relative">
              <Image
                src="/logo.png"
                alt="Halal Fly Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <p className="text-[#D0A148] text-sm">
              There are many variations of passages of lorem the ipsum available
              but it is the majority of suffered that a alteration in that some
              dummy text.
            </p>
            <div className="flex items-center gap-5 mt-2">
              <a
                href="#"
                className="text-[#D0A148] hover:text-[#FFFFFF] transition-colors"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="#"
                className="text-[#D0A148] hover:text-[#FFFFFF] transition-colors"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="#"
                className="text-[#D0A148] hover:text-[#FFFFFF] transition-colors"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="text-[#D0A148] hover:text-[#FFFFFF] transition-colors"
              >
                <FaPinterest className="text-lg" />
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-base font-semibold mb-5">Support</h6>
            <ul className="flex flex-col text-[#D0A148] gap-3">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors text-sm"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors text-sm"
                >
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors text-sm"
                >
                  Contact Channels
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h6 className="text-base font-semibold mb-5">About Us</h6>
            <ul className="flex text-[#D0A148] flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors text-sm"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors text-sm"
                >
                  Travel Blog & Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors text-sm"
                >
                  Working With Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors text-sm"
                >
                  Be Our Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-base font-semibold mb-5">Contact Info</h6>
            <ul className="flex text-[#D0A148] flex-col gap-4">
              <li className="text-sm">
                455 West Orchard Street
                <br />
                Kings Mountain, NC 280867
              </li>
              <li className="flex items-center gap-2 text-sm">
                <LuPhoneCall className="text-[#FFFFFF]" />
                <span>+088 (006) 992-99-10</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CiMail className="text-[#FFFFFF]" />
                <span>example@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 pt-8 border-t border-[#D0A148] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#D0A148] mb-4 md:mb-0">
            © 2025 Halal Fly Fig. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
              VISA
            </div>
            <div className="w-10 h-6 bg-[#FF5F00] rounded flex items-center justify-center text-white text-xs font-bold">
              MC
            </div>
            <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
              PP
            </div>
            <div className="w-10 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
              SK
            </div>
            <div className="w-10 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
              MS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;