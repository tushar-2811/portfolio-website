import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 flex justify-center gap-1 items-center text-xs">
        Made By Tushar <FaHeart className="text-red-600" />
      </small>
      <p className="text-xs">
        This is Made to ask <span className="font-semibold text-red-600">Tanisha</span>  out on date
      </p>
    </footer>
  );
}
